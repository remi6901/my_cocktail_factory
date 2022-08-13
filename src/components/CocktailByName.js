import {Link} from "react-router-dom";
import "../styles/cocktailByName.css"

function CocktailByName({cocktail}){
    return(
            <div className="cocktailByNameDiv">
                <h3>{cocktail.strDrink}</h3>
                <Link className="cocktailByNameLink" to={`/cocktail/${cocktail.idDrink}`}>
                    <img className="cocktailByNameImg" 
                        src={cocktail.strDrinkThumb} 
                        alt={cocktail.strDrink}/>
                </Link>
            </div>        
    )
}

export default CocktailByName;