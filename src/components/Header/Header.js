import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import HeaderAuth from './HeaderAuth';

function Header(props){
    return(
        <>
        {
            !props.loggedIn ? (
                <header className="header">
                <div className="header__container">
                <Logo/>
                    <nav className="header__nav">
                    <Link to="/signup" className="header__signup"> Регистрация</Link>
                    <Link to="/signin" className="header__signin"> Войти</Link>
                    </nav>         
                </div>
                </header>
            ) : (
                <HeaderAuth/>
            )
        }
        </>
    )
}

export default Header;