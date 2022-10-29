import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header(loggedIn){
    return(
        <header className="header">
        
        <div className="header__container">
        <Logo/>
       
                <nav className="header__nav">
                <Link to="/signup" className="header__signup"> Регистрация</Link>
                <Link to="/signin" className="header__signin"> Войти</Link>
                </nav>
            {/* <Navigation/> */}
       
        </div>

        </header>
    )
}

export default Header;