import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register(){
    return(
        <section className="register">
        <Logo/>
        <h1 className="register__title"> Добро пожаловать! </h1>
        <form className="register__form">
        <label className="register__label" type="text" placeholder="Ваше имя" minLength="2" maxLength="30" required>Имя</label>
        <input className="register__input"></input>
        <label className="register__label" type="email" placeholder="Ваше e-mail" required>E-mail</label>
        <input className="register__input"></input>
        <label className="register__label">Пароль</label>
        <input className="register__input" type="password" placeholder="Придумайте пароль" required></input>
        <span className="register__error"> Что-то пошло не так... </span>
        <button className="register__btn"> Зарегистрироваться </button>
        <Link to="/signin" className="register__link">Уже зарегестрированы? <span className='register__link_orange'> Войти </span></Link>
        </form>
        </section>
    )
}

export default Register;