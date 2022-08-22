import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../styles/cocktailByCat.css"
import axios from "axios";

function SearchByCatResult(){
    const[cocktailByCat, setCocktailByCat] = useState("");
    const {searchByCat} = useParams();

    useEffect(() => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchByCat}`)
            .then(response => response.data)
            .then(data => setCocktailByCat(data.drinks))
    }, [])

    return(
        <div className="searchCocktailByCatContainer">
                {cocktailByCat && cocktailByCat.map((cocktail) => (
                    <div className="cocktailByCatDiv">
                    <Link to={`/cocktail/${cocktail.idDrink}`}>
                        <div className="cocktailByCatTitle">
                            <h3>{cocktail.strDrink}</h3>
                        </div>
                        <div className="cocktailByCatDivImg">  
                            <img className="cocktailBycatImg" 
                                src={cocktail.strDrinkThumb} 
                                alt={cocktail.strDrink}/>
                        </div>
                    </Link>
                </div> 
                ))}
            </div>
    )
}

export default SearchByCatResult;

