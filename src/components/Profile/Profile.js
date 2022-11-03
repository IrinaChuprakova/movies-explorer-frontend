import './Profile.css';
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import  FormValidate from "../FormValidate/FormValidate";

function Profile(props){
    const {values, handleChange, errors, isValid, resetForm} = FormValidate();
    const currentUser = React.useContext(CurrentUserContext);
    values.name = currentUser.name;
    values.email = currentUser.email;
    return(
        <section className="profile">
        <h1 className="profile__title"> Привет,{currentUser.name} </h1>
        <form className="profile__form">
        <div className="profile__container">
        <label className="profile__label" type="text" placeholder="Ваше имя" name="name" value={values.name || ""} pattern="[а-яА-ЯёЁa-zA-Z-\s]+" minLength="2" maxLength="30" required>Имя</label>
        <input className="profile__input" value={values.name || ""} onChange={handleChange}></input>
        </div>
        <span className="login__error"> {errors.name} </span>
        <div className="profile__container">
        <label className="profile__label" type="email" placeholder="Ваше e-mail" name="email" value={values.email || ""} minLength="2" maxLength="30" required>E-mail</label>
        <input className="profile__input" value={values.email || ""} onChange={handleChange}></input>
        </div>
        <span className="login__error"> {errors.email} </span>
        <button className="profile__btn-edit" type="button"> Редактировать </button>
        <button className="profile__btn-logout" type="button" onClick={props.onLogOut}> Выйти из аккаунта </button>
        </form>
        </section>
    )
}

export default Profile;