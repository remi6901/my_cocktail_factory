import axios from "axios";
import {useState} from "react";
import CocktailByCat from "./CocktailByCat";
import CocktailByName from "./CocktailByName";
import CocktailWithoutAlcohol from "./CocktailWithoutAlcohol";
import NavBar from "./NavBar";

function SearchCocktail(){
    const[cocktailByName, setCocktailByName] = useState("");
    const[cocktailByCat, setCocktailByCat] = useState("");
    const[searchByName, setSearchByName] = useState("");
    const[searchByCat, setSearchByCat] = useState("");
    const[cocktailWithoutAlcohol, setCocktailWithoutAlcohol] = useState("")

    
    function getCocktailByName(){
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchByName}`)
            .then(response => response.data)
            .then(data => setCocktailByName(data.drinks))
    }
    

    function getCocktailByCat(){
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchByCat}`)
        .then(response => response.data)
        .then(data => setCocktailByCat(data.drinks))
    }

    function getCocktailWithoutAlcohol(){
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
        .then(response => response.data)
        .then(data => setCocktailWithoutAlcohol(data.drinks))
    }
       
    
    return(
        <div>
            <NavBar/>
            <h2>Search a cocktail</h2>
            <label htmlFor="name"> By name : </label>
            <input type="text" name="name" value={searchByName} onChange={e => setSearchByName(e.target.value)} placeholder="ex : Mojito"/>
            <button onClick={getCocktailByName}>Search</button><br/>
            <label htmlFor="name"> By alcohol : </label>
            <select onChange={e => setSearchByCat(e.target.value)}>
                <option value="">---</option>
                <option value="Amaretto">Amaretto</option>
                <option value="Beer">Beer</option>
                <option value="Bourbon">Bourbon</option>
                <option value="Cognac">Cognac</option>
                <option value="Cointreau">Cointreau</option>
                <option value="Gin">Gin</option>
                <option value="Grand Marnier">Grand Marnier</option>
                <option value="Jagermeister">Jagermeister</option>
                <option value="Rum">Rum</option>
                <option value="Scotch">Scotch</option>
                <option value="Tequila">Tequila</option>
                <option value="Vermouth">Vermouth</option>
                <option value="Vodka">Vodka</option>
                <option value="Whiskey">Whiskey</option> 
            </select>
            <button onClick={getCocktailByCat}>Search</button>
            {cocktailByName && cocktailByName.map((cocktail) => (
               <CocktailByName cocktail={cocktail} key={cocktail.idDrink}/>
            ))} 
            {cocktailByCat && cocktailByCat.map((cocktail) => (
                <CocktailByCat cocktail={cocktail} key={cocktail.idDrink}/>
            ))}
            <p>If you looking for a cocktail without alcohol, </p>
            <button onClick={getCocktailWithoutAlcohol}>Click here</button>
            {cocktailWithoutAlcohol && cocktailWithoutAlcohol.map((cocktail) => (
                <CocktailWithoutAlcohol cocktail={cocktail} key={cocktail.idDrink}/>
            ))}
        </div>
    )
}

export default SearchCocktail;