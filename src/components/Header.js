import logo from '../images/Logo.svg';
import Nav from './Nav';
import { Link } from "react-router-dom"

function Header() {
    return (
    <header>
        <Link to="/"><img src={logo} className="Little-Lemon-logo" alt="logo" /></Link>
        <Nav />
    </header>);
}

export default Header;