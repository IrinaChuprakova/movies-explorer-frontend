import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';
import menu from '../../images/menu.svg'

function Navigation(loggedIn) {
    return (

        <nav className="nav-authorize-profile">
            <div className="nav-authorize-profile__container">
                <NavLink to="/movies" className="nav-authorize-profile__link link">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="nav-authorize-profile__link link">Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className="nav-authorize-profile__akkaunt link"> Аккаунт</NavLink>
        </nav>


    )

}

export default Navigation;