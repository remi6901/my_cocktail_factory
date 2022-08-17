import {Link} from "react-router-dom";
import "../styles/cocktailWithoutAlcohol.css"

function CocktailWithoutAlcohol({cocktail}){
    return(
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
    )
}

export default CocktailWithoutAlcohol;