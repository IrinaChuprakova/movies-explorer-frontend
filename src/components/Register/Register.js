import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import  FormValidate from "../FormValidate/FormValidate";

function Register(props){
    const {values, handleChange, errors, isValid, resetForm} = FormValidate();
    
    function handleInput(evt) {
        handleChange(evt);
        console.log(errors);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(values.name,values.email,values.password);
    }

    return(
        <section className="register">
        <Logo/>
        <h1 className="register__title"> Добро пожаловать! </h1>
        <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label">Имя</label>
        <input className="register__input" type="text" placeholder="Ваше имя" name="name" value={values.name || ""} onChange={handleInput} minLength="2" maxLength="30" required></input>
        {/* <span>{errors.email}</span> */}
        <label className="register__label">E-mail</label>
        <input className="register__input" type="email" placeholder="Ваше e-mail" name="email" value={values.email || ""} onChange={handleInput} required></input>
        <label className="register__label">Пароль</label>
        <input className="register__input" type="password" placeholder="Придумайте пароль" name="password" value={values.password || ""} onChange={handleInput} required></input>
        <span className="register__error"> Что-то пошло не так... </span>
        <button className="register__btn" type="submit"> Зарегистрироваться </button>
        <Link to="/signin" className="register__link">Уже зарегестрированы? <span className='register__link_orange'> Войти </span></Link>
        </form>
        </section>
    )
}

export default Register;