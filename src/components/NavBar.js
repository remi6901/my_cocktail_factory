import {Link} from "react-router-dom";
import "../styles/navbar.css"

function NavBar(){
    return(
        <div>
            <ul className="navBarUl">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search_cocktail">Search</Link></li>
                <li><Link to="/surprise_me">Surprise me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            {/*<div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/search_cocktail">Search</Link>
            </div>
            <div>
                <Link to="/surprise_me">Surprise me</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
    </div>*/}

        </div>
    )
}

export default NavBar;