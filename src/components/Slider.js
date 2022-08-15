import "../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";


function Slider({img}){
   
   
    return(
        <div className="sliderImg">
           
           <Carousel>
                    {img && img.map((cocktail) => (  
                            <div key={cocktail.idDrink}>
                                <img className="sliderImg" src={cocktail.strDrinkThumb} alt=""/> 
                                <div className="overlay">
                                    <Link to={`/cocktail/${cocktail.idDrink}`}
                                        style={{ textDecoration: 'none' }}>
                                            <h2 className="overlayTitle">{cocktail.strDrink}</h2>
                                    </Link>
                                </div> 
                            </div>   
                    )).slice(14,64)}
                
            </Carousel>
        </div>
    )
}

export default Slider;