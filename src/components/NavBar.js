import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/search_cocktail">Search</Link>
            <Link to="/surprise_me">Surprise me</Link>
        </div>
    )
}

export default NavBar;