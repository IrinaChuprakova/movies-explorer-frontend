import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function HeaderAuth(loggedIn){
    return(
        <header className="header-auth">
        
        <div className="header__container">
        <Logo/>

            <Navigation/>
       
        </div>

        </header>
    )
}

export default HeaderAuth;