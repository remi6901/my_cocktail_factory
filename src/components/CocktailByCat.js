import {Link} from "react-router-dom";

function CocktailByCat({cocktail}){
    return(
        <div>
            <h3>{cocktail.strDrink}</h3>
            <Link to={`/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/></Link>
        </div>
    )
}

export default CocktailByCat;