import './Sidebar.css';
import { NavLink, Link } from 'react-router-dom';

function Sidebar({ isOpen = false, onClose }) {

    return (isOpen &&
        <div className="sidebar">
            <ul className="sidebar__list">
                <li><Link className="sidebar__link"  to="/">Главная</Link></li>
                <li><NavLink className="sidebar__link" activeClassName="sidebar__link_active" to="/movies">Фильмы</NavLink></li>
                <li><NavLink  className="sidebar__link" activeClassName="sidebar__link_active" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                <li className="sidebar__link_profile"><Link className="sidebar__link" to="/profile">Аккаунт</Link></li>
                <button className="sidebar__close" onClick={onClose}></button>
            </ul>
        </div>)
}

export default Sidebar;