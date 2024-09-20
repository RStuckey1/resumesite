import { Link } from "react-router-dom";
import Card from "./Card";

function Header() {
 
    return(
        <header>
            <h1>Richard K Stuckey</h1>
            <Card />
            <nav>
                <ul>
                    <li><Link to="/About">About</Link></li>                    
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;