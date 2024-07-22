import logo from '../images/Logo.svg';

function Header() {
    return (
    <header>
        <a href="#"><img src={logo} className="Little-Lemon-logo" alt="logo" /></a>
    </header>);
}

export default Header;