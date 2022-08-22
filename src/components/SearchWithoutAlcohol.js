import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import "../styles/cocktailWithoutAlcohol.css"

function SearchWithoutAlcohol(){
    const[cocktailWithoutAlcohol, setCocktailWithoutAlcohol] = useState("");

    useEffect(() => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            .then(response => response.data)
            .then(data => setCocktailWithoutAlcohol(data.drinks));
    }, [])
        
    
    return(
        <div className="searchCocktailWithoutAlcoholContainer">
                {cocktailWithoutAlcohol && cocktailWithoutAlcohol.map((cocktail) => (
                        <div className="cocktailWithoutAlcoholDiv">
                        <Link className="cocktailWithoutAlcoholLink" to={`/cocktail/${cocktail.idDrink}`}>
                            <div className="cocktailWithoutAlcoholTitle">
                                <h3>{cocktail.strDrink}</h3>
                            </div>
                            <div className="cocktailWithoutAlcoholDivImg">  
                                <img className="cocktailWithoutAlcoholImg" 
                                    src={cocktail.strDrinkThumb} 
                                    alt={cocktail.strDrink}/>
                            </div>
                        </Link>
                    </div>   
                ))}
            </div>
    )
}

export default SearchWithoutAlcohol;