import {Link} from "react-router-dom";
import "../styles/cocktailByName.css"

function CocktailByName({cocktail}){
    return(
        <div className="cocktailByNameDivPrincipal" >
            <div className="cocktailByNameDiv">
                <h3>{cocktail.strDrink}</h3>
                <Link to={`/cocktail/${cocktail.idDrink}`}><img className="cocktailByNameImg" src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/></Link>
            </div>
        </div>
        
    )
}

export default CocktailByName;