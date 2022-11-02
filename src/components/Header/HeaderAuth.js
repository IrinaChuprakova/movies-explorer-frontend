import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

function HeaderAuth(){
    const [isSidebarOpened, setSidebar] = useState(false);

    function toggleSidebar() {
        setSidebar(!isSidebarOpened);
    }

    return(
        <header className="header-auth">
        
        <div className="header__container">
        <Logo/>
        <button className="header__menu" onClick={toggleSidebar} type="button"></button>
            <Navigation/>
            <Sidebar  isOpen={isSidebarOpened} onClose={toggleSidebar} />    
        </div>
        </header>
    )
}

export default HeaderAuth;