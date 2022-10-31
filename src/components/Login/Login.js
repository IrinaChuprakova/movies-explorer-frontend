import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login(props){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmail(evt) {
        setEmail(evt.target.value)
    }

    function handlePassword(evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email || !password) {
            return
        }
        props.onLogin(email, password);
    }

    return(
        <section className="login" >
        <Logo/>
        <h1 className="login__title"> Рады видеть! </h1>
        <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">E-mail</label>
        <input className="login__input" type="email" value={email} onChange={handleEmail} placeholder="Ваше e-mail" required></input>
        <label className="login__label">Пароль</label>
        <input className="login__input" type="password" value={password} onChange={handlePassword} placeholder="Ваш пароль" required></input>
        <button className="login__btn" type="submit"> Войти </button>
        <Link to="/signup" className="login__link"> Ещё не зарегистрированы? <span className='login__link_orange'> Регистрация </span></Link>
        </form>
        </section>
    )
}

export default Login