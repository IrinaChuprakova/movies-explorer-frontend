import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import  FormValidate from "../FormValidate/FormValidate";

function Register(props){
    const {values, handleChange, errors, isValid, resetForm} = FormValidate();

    React.useEffect(() => {
        props.checkAuth();
    }, [])

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
        <input className="register__input" type="text" placeholder="Ваше имя" name="name" value={values.name || ""} onChange={handleChange} pattern="[а-яА-ЯёЁa-zA-Z-\s]+" minLength="2" maxLength="30" required></input>
        <span className="register__error"> {errors.name} </span>
        <label className="register__label">E-mail</label>
        <input className="register__input" type="email" placeholder="Ваше e-mail" name="email" value={values.email || ""} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
        <span className="register__error"> {errors.email} </span>
        <label className="register__label">Пароль</label>
        <input className="register__input" type="password" placeholder="Придумайте пароль" name="password" value={values.password || ""} onChange={handleChange} minLength="2" maxLength="30" required></input>
        <span className="register__error"> {errors.password} </span>
        <span className="register__error-api">{props.errorApi}</span>
        <button className={isValid ? "register__btn register__btn_valid" : "register__btn register__btn_error-validation"} disabled={!isValid} type="submit"> Зарегистрироваться </button>
        <Link to="/signin" className="register__link"> Уже зарегестрированы? <span className='register__link_orange'> Войти </span></Link>
        </form>
        </section>
    )
}

export default Register;