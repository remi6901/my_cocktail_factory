import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "../styles/cocktailByName.css";



function SearchByNameResult (){
    const[cocktailByName, setCocktailByName] = useState("");
    const {searchByName} = useParams()
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchByName}`)
        .then(response => response.data)
        .then(data => setCocktailByName(data.drinks));
    },[])
       
    
    
    return(
    <div className="searchCocktailByNameContainer">
        {cocktailByName && cocktailByName.map((cocktail) => (
            <div className="cocktailByNameDiv">
            <Link className="cocktailByNameLink" to={`/cocktail/${cocktail.idDrink}`}>
                <div className="cocktailByNameTitle">
                    <h3>{cocktail.strDrink}</h3>
                </div>
                <div className="cocktailByNameDivImg">  
                    <img className="cocktailByNameImg" 
                        src={cocktail.strDrinkThumb} 
                        alt={cocktail.strDrink}/>
                </div>
            </Link>
        </div>        
        ))}
    </div>
    )
}

export default SearchByNameResult