import {useState} from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/searchCocktail.css";
import cocktail3 from "../assets/cocktail3.jpg";
import cocktail4 from "../assets/cocktail4.jpg";



function SearchCocktail(){
    const[searchByName, setSearchByName] = useState("");
    const[searchByCat, setSearchByCat] = useState("");
    
     
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
            <Link to={`/name/${searchByName}`}><button>Search</button></Link><br/>
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
            <Link to={`/alcohol/${searchByCat}`}><button>Search</button></Link>
            <p>If you looking for a cocktail without alcohol, </p>
            <Link to={`/without_alcohol/`}><button>Click here</button></Link>
        </div>
    )
}

export default SearchCocktail;