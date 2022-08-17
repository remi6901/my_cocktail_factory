import {Link} from "react-router-dom";
import "../styles/cocktailByName.css";


function CocktailByName({cocktail}){
    return(
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
    )
}

export default CocktailByName;