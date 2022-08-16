import { useState } from "react";
import "../styles/navbar.css"

function NavBar(){
    const [showLinks, setShowLinks] = useState(false);

    function handleShowLinks(){
        setShowLinks(!showLinks);
    }

    return(
        <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"}`}>
            <div></div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Home</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Search a cocktail</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Surprise me</a>
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Contact</a>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default NavBar;