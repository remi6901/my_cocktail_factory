import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../assets/video.mp4"
import "../styles/home.css"

function Home(){

    return(
        <div>
            <ReactPlayer url={video} playing muted width="100%" height="80vh"/><br/>
            <p className="homeParagraph">Welcome to my cocktail factory. For your personal pleasure, 
                your aperitifs or your evenings with friends, 
                let yourself be tempted by the many cocktails that you will discover.</p>
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