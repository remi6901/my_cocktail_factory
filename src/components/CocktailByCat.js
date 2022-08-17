import {Link} from "react-router-dom";
import "../styles/cocktailByCat.css"

function CocktailByCat({cocktail}){
    return(
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
    )
}

export default CocktailByCat;

