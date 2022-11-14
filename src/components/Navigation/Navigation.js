import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(loggedIn) {
    return (

        <nav className="nav-authorize-profile">
            <div className="nav-authorize-profile__container">
                <NavLink to="/movies"  className="nav-authorize-profile__link link" activeClassName="active">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="nav-authorize-profile__link link" activeClassName="active">Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className="nav-authorize-profile__akkaunt link" activeClassName="active"> Аккаунт</NavLink>
        </nav>


    )

}

export default Navigation;