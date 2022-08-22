import {Link} from "react-router-dom";
import {useState, useEffect} from "react"
import ReactPlayer from "react-player";
import video from "../assets/video.mp4"
import "../styles/home.css";
import Slider from "./Slider";
import axios from "axios";
import cocktail1 from "../assets/cocktail1.jpg"
import cocktail2 from "../assets/cocktail2.jpg"



function Home(){
const [endVideo, setEndVideo] = useState(true);
const [imgCarousel, setImgCarousel] = useState([]);

useEffect(() => {
    axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
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
            <div className="homeDivContainer">
                    <div className="homeContainer1">
                        <img className="cocktail1" src={cocktail1} alt="" width="100%"/>
                            <Link   to="/search_cocktail"
                                    style={{ textDecoration: 'none' }}>
                                <div className="containerTitle1">
                                    <h3 className="title1">Search a cocktail</h3>
                                </div>
                            </Link>
                    </div>
                    <div className="homeContainer2">
                        <img className="cocktail2" src={cocktail2} alt="" width="100%"/>
                            <Link   to="/surprise_me"
                                    style={{ textDecoration: 'none' }}>
                                <div className="containerTitle2">
                                    <h3 className="title2">Surprise me</h3>
                                </div>
                            </Link>    
                    </div>
            </div>
        </div>
    )
}

export default Home;