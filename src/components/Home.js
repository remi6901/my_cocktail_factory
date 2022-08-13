import {Link} from "react-router-dom";
import {useState, useEffect} from "react"
import ReactPlayer from "react-player";
import video from "../assets/video.mp4"
import "../styles/home.css";
import Slider from "./Slider";
import axios from "axios";



function Home(){
const [endVideo, setEndVideo] = useState(true);
const [imgCarousel, setImgCarousel] = useState([]);

useEffect(() => {
    axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
        .then(response => response.data)
        .then(data => setImgCarousel(data.drinks))
}, [])
   
function handleEndVideo(){
    setEndVideo(!endVideo)
}
    return(
        <div className="homeDivPrincipal">
            {endVideo ? <ReactPlayer url={video} 
                        playing 
                        muted 
                        width="100%" 
                        height="80vh"
                        onEnded={handleEndVideo}/> : <Slider img={imgCarousel}/>}<br/>
            <p className="homeParagraph">Welcome to my cocktail factory. For your personal pleasure, 
                your aperitifs or your evenings with friends, 
                let yourself be tempted by the many cocktails that you will discover.
                do not hesitate to share your experience with us in order to help us 
                improve by contacting us <Link to="/contact"><span className="homeContact">here.</span></Link>
                </p>
            <div className="homeDivCocktail">
                <Link className="homeDivImgCocktail1" to="/search_cocktail">
                    <div >
                        <h3 className="homeH3Cocktail">Search a cocktail</h3>
                    </div>
                </Link>
                <Link className="homeDivImgCocktail2" to="/surprise_me"> 
                    <div>
                        <h3 className="homeH3Cocktail">Surprise me</h3>               
                    </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Home;