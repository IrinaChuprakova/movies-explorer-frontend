import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login(){
    return(
        <section className="login">
        <Logo/>
        <h1 className="login__title"> Рады видеть! </h1>
        <form className="login__form">
        <label className="login__label" type="email" placeholder="Ваше e-mail" required>E-mail</label>
        <input className="login__input"></input>
        <label className="login__label">Пароль</label>
        <input className="login__input" type="password" placeholder="Ваш пароль" required></input>
        <button className="login__btn"> Войти </button>
        <Link to="/signup" className="login__link"> Ещё не зарегистрированы? <span className='login__link_orange'> Регистрация </span></Link>
        </form>
        </section>
    )
}

export default Login;