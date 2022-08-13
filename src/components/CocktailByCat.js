import {Link} from "react-router-dom";
import "../styles/cocktailByCat.css"

function CocktailByCat({cocktail}){
    return(
        <div className="cocktailByCatDiv">
            <h3>{cocktail.strDrink}</h3>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img className="cocktailByCatImg" 
                src={cocktail.strDrinkThumb} 
                alt={cocktail.strDrink}/>
            </Link>
        </div>  
    )
}

export default CocktailByCat;