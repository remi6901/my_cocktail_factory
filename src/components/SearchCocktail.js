import axios from "axios";
import {useState} from "react";
import CocktailByCat from "./CocktailByCat";
import CocktailByName from "./CocktailByName";
import CocktailWithoutAlcohol from "./CocktailWithoutAlcohol";
import NavBar from "./NavBar";
import "../styles/searchCocktail.css";
import cocktail3 from "../assets/cocktail3.jpg";
import cocktail4 from "../assets/cocktail4.jpg";


function SearchCocktail(){
    const[cocktailByName, setCocktailByName] = useState("");
    const[cocktailByCat, setCocktailByCat] = useState("");
    const[searchByName, setSearchByName] = useState("");
    const[searchByCat, setSearchByCat] = useState("");
    const[cocktailWithoutAlcohol, setCocktailWithoutAlcohol] = useState("");
    const[searchByNameVisible, setSearchByNameVisible] = useState(true);
    

    
    function getCocktailByName(){
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchByName}`)
            .then(response => response.data)
            .then(data => setCocktailByName(data.drinks));
            setSearchByNameVisible(!searchByNameVisible);
            console.log(searchByNameVisible)
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
        .then(data => setCocktailWithoutAlcohol(data.drinks));
    }
     

    function handleSearchByNameValue(e){
        e.preventDefault()
        setSearchByName(e.target.value)
    }

    
    return(
        <div className="searchCocktailDivPrincipal">
            <NavBar/>
            <div className="searchCocktailDivContainer">
                <div className="searchCocktailContainer1">
                    <p>Search your favorite cocktail</p>
                </div>
                <div className="searchCocktailContainer2">
                    <img className="searchCocktailImgCocktail3" src={cocktail3} alt="photo d'un cocktail"/>
                </div>
                <div className="searchCocktailContainer3">
                    <img className="searchCocktailImgCocktail4" src={cocktail4} alt="photo d'un cocktail"/>
                </div>
            </div>
            <label htmlFor="name"> By name : </label>
            <input type="text" 
                    name="name" 
                    value={searchByName} 
                    onChange={handleSearchByNameValue} 
                    placeholder="ex : Mojito"/>
            <button onClick={getCocktailByName}>{searchByNameVisible ? "Close" : "Search"}</button><br/>
            {searchByNameVisible && searchByNameVisible ? <div className="searchCocktailByNameContainer">
                {cocktailByName && cocktailByName.map((cocktail) => (
                   <CocktailByName cocktail={cocktail} key={cocktail.idDrink}/>
            ))}
            </div> : ""}
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
            <div className="searchCocktailByCatContainer">
                {cocktailByCat && cocktailByCat.map((cocktail) => (
                    <CocktailByCat cocktail={cocktail} key={cocktail.idDrink}/>
                ))}
            </div>
            <p>If you looking for a cocktail without alcohol, </p>
            <button onClick={getCocktailWithoutAlcohol}>Click here</button>
            <div className="searchCocktailWithoutAlcoholContainer">
                {cocktailWithoutAlcohol && cocktailWithoutAlcohol.map((cocktail) => (
                        <CocktailWithoutAlcohol cocktail={cocktail} key={cocktail.idDrink}/>
                ))}
            </div>
        </div>
    )
}

export default SearchCocktail;