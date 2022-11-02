import './Profile.css';
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(){
    const currentUser = React.useContext(CurrentUserContext);
    return(
        <section className="profile">
        <h1 className="profile__title"> Привет,{currentUser.name} </h1>
        <form className="profile__form">
        <div className="profile__container">
        <label className="profile__label" type="text" placeholder="Ваше имя" minLength="2" maxLength="30" required>Имя</label>
        <input className="profile__input" value={currentUser.name} o></input>
        </div>
        <div className="profile__container">
        <label className="profile__label" type="email" placeholder="Ваше e-mail" required>E-mail</label>
        <input className="profile__input" value={currentUser.email}></input>
        </div>
        <button className="profile__btn-edit" type="button"> Редактировать </button>
        <button className="profile__btn-logout" type="button"> Выйти из аккаунта </button>
        </form>
        </section>
    )
}

export default Profile;