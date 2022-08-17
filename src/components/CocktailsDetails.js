import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import "../styles/cocktailDetails.css"

function CocktailDetails(){
    const {id} = useParams()
    const [cocktailDetails, setCocktailDetails] = useState("")
    
    useEffect(() => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.data)
            .then(data => setCocktailDetails(data.drinks))
    }, [])
    
    return(
        <div>
            {cocktailDetails && cocktailDetails.map((cocktail) => (
                <div key={cocktail.idDrink} className="cocktailDetailsPrincipalDiv" >
                    <h2 className="cocktailDetailsTitle">{cocktail.strDrink}</h2>
                    <div className="cocktailDetailsDiv">
                        <div className="cocktailDetailsDivImg" >
                            <img className="cocktailDetailsImg" src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                        </div>
                        <div className="cocktailDetailsDivRecip" >
                            <h3>Ingredients : </h3>
                            <ul className="cocktailDetailsUl" >
                                {cocktail.strIngredient1 ? <li>{cocktail.strIngredient1} - {cocktail.strMeasure1}</li> : ""}
                                {cocktail.strIngredient2 ? <li>{cocktail.strIngredient2} - {cocktail.strMeasure2}</li> : ""}
                                {cocktail.strIngredient3 ? <li>{cocktail.strIngredient3} - {cocktail.strMeasure3}</li> : ""}
                                {cocktail.strIngredient4 ? <li>{cocktail.strIngredient4} - {cocktail.strMeasure4}</li> : ""}
                                {cocktail.strIngredient5 ? <li>{cocktail.strIngredient5} - {cocktail.strMeasure5}</li> : ""}
                                {cocktail.strIngredient6 ? <li>{cocktail.strIngredient6} - {cocktail.strMeasure6}</li> : ""}
                                {cocktail.strIngredient7 ? <li>{cocktail.strIngredient7} - {cocktail.strMeasure7}</li> : ""}
                                {cocktail.strIngredient8 ? <li>{cocktail.strIngredient8} - {cocktail.strMeasure8}</li> : ""}
                                {cocktail.strIngredient9 ? <li>{cocktail.strIngredient9} - {cocktail.strMeasure9}</li> : ""}
                                {cocktail.strIngredient10 ? <li>{cocktail.strIngredient10} - {cocktail.strMeasure10}</li> : ""}
                                {cocktail.strIngredient11 ? <li>{cocktail.strIngredient11} - {cocktail.strMeasure11}</li> : ""}
                                {cocktail.strIngredient12 ? <li>{cocktail.strIngredient12} - {cocktail.strMeasure12}</li> : ""}
                                {cocktail.strIngredient13 ? <li>{cocktail.strIngredient13} - {cocktail.strMeasure13}</li> : ""}
                                {cocktail.strIngredient14 ? <li>{cocktail.strIngredient14} - {cocktail.strMeasure14}</li> : ""}
                                {cocktail.strIngredient15 ? <li>{cocktail.strIngredient15} - {cocktail.strMeasure15}</li> : ""}
                            </ul>
                            <h3>Recipe : </h3>
                            <p>{cocktail.strInstructions}</p>
                        </div>        
                    </div>
                    <a href="/search_cocktail"><button className="cocktailDetailsButton">Return</button></a>
                </div>
            ))}
            
        </div>
    )
}

export default CocktailDetails