import React from "react";
import { Link } from 'react-router-dom';
import  FormValidate from "../FormValidate/FormValidate";
import './Login.css';
import Logo from '../Logo/Logo';

function Login(props){
    const {values, handleChange, errors, isValid, resetForm} = FormValidate();
    
    React.useEffect(() => {
        props.checkAuth();
    }, []);
    
    function handleSubmit(evt) {
        evt.preventDefault();
        if (!values.email || !values.password) {
            return
        }
        props.onLogin(values.email, values.password);
    }

    return(
        <section className="login" >
        <Logo/>
        <h1 className="login__title"> Рады видеть! </h1>
        <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">E-mail</label>
        <input className="login__input" type="email" placeholder="Ваше e-mail" name="email" value={values.email || ""} onChange={handleChange}  required></input>
        <span className="login__error"> {errors.email} </span>
        <label className="login__label">Пароль</label>
        <input className="login__input" type="password" placeholder="Ваш пароль" name="password" value={values.password || ""} onChange={handleChange}  minLength="2" maxLength="30" required></input>
        <span className="login__error"> {errors.password} </span>
        <span className="login__error-api">{props.errorApi}</span>
        <button className={isValid ? "login__btn login__btn_valid" : "login__btn login__btn_error-validation"} disabled={!isValid} type="submit"> Войти </button>
        <Link to="/signup" className="login__link"> Ещё не зарегистрированы? <span className='login__link_orange'> Регистрация </span></Link>
        </form>
        </section>
    )
}

export default Login