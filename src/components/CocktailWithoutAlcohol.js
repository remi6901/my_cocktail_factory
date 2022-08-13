import {Link} from "react-router-dom";
import "../styles/cocktailWithoutAlcohol.css"

function CocktailWithoutAlcohol({cocktail}){
    return(
        <div className="cocktailWithoutAlcoholDiv">
            <h3>{cocktail.strDrink}</h3>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img className="cocktailWithoutAlcoholImg" 
                src={cocktail.strDrinkThumb} 
                alt={cocktail.strDrink}/>
            </Link>
        </div>  
    )
}

export default CocktailWithoutAlcohol;