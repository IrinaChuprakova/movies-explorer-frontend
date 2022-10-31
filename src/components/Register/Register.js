import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register(props){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    function handleName(evt) {
        setName(evt.target.value)
    }

    function handleEmail(evt) {
        setEmail(evt.target.value)
    }

    function handlePassword(evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(name,email,password);
    }

    return(
        <section className="register">
        <Logo/>
        <h1 className="register__title"> Добро пожаловать! </h1>
        <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label">Имя</label>
        <input className="register__input" type="text" placeholder="Ваше имя" value={name} onChange={handleName} minLength="2" maxLength="30" required></input>
        <label className="register__label">E-mail</label>
        <input className="register__input" type="email" placeholder="Ваше e-mail" value={email} onChange={handleEmail} required></input>
        <label className="register__label">Пароль</label>
        <input className="register__input" type="password" placeholder="Придумайте пароль" onChange={handlePassword} value={password} required></input>
        <span className="register__error"> Что-то пошло не так... </span>
        <button className="register__btn" type="submit"> Зарегистрироваться </button>
        <Link to="/signin" className="register__link">Уже зарегестрированы? <span className='register__link_orange'> Войти </span></Link>
        </form>
        </section>
    )
}

export default Register;