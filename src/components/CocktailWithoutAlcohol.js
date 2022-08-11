import {Link} from "react-router-dom"

function CocktailWithoutAlcohol({cocktail}){
    return(
        <div>
            <h3>{cocktail.strDrink}</h3>
            <Link to={`/cocktail/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/></Link>
        </div>
    )
}

export default CocktailWithoutAlcohol;