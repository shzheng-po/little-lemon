import logo from '../images/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
    <header>
        <a href="#"><img src={logo} className="Little-Lemon-logo" alt="logo" /></a>
        <Nav />
    </header>);
}

export default Header;