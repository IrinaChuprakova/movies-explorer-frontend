// import Navigation from "../Navigation/Navigation";
import './Header.css';
import logo from '../../images/logo.svg';

function Header(props){
    return(
        <header className="header">
        <div className="header__container">
        <img src={logo} className="header__logo"/>
        <nav>
            <a className="nav__signup">Регистрация</a>
            <a className="nav__signin">Войти</a>
        </nav>
            {/* <Navigation /> */}
        </div>
        </header>
    )
}

export default Header;