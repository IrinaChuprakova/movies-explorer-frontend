import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';

function Navigation(loggedIn) {
    return (
        <>
        <div>
        <NavLink to="/movies" className="link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="link">Сохранённые фильмы</NavLink>
        <NavLink to="/profile" className="nav-authorize-profile link"> Аккаунт</NavLink>
        </div>

        </>           
    )

}

export default Navigation;