import './Profile.css';
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import  FormValidate from "../FormValidate/FormValidate";

function Profile(props){
    const {values, setValues, handleChange, errors, isValid, resetForm} = FormValidate();
    const currentUser = React.useContext(CurrentUserContext);
    const [show, setShow] = React.useState(true);

    const isInfo = (values.name !== currentUser.name || values.email !== currentUser.email);

    React.useEffect(() => {
        setValues(currentUser)
      }, [currentUser])
    
    function handleSubmit(evt){
        evt.preventDefault();
        props.onUpdate(values.name,values.email)
        setShow(true);
    }

    function shows() {
        setShow(false)
    }

    return(
        <section className="profile">
        <h1 className="profile__title"> Привет,{currentUser.name} </h1>
        <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__container">
        <label className="profile__label">Имя</label>
        <input className="profile__input" disabled={show ?  true : false } type="text" name="name" value={values.name || ""} onChange={handleChange} pattern="[а-яА-ЯёЁa-zA-Z-\s]+" minLength="2" maxLength="30" required></input>
        </div>
        <span className="profile__error"> {errors.name} </span>
        <div className="profile__container">
        <label className="profile__label">E-mail</label>
        <input className="profile__input" disabled={show ?  true : false } type="email" name="email" value={values.email || ""} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" minLength="2" maxLength="30" required></input>
        </div>
        <span className="profile__error"> {errors.email} </span>
        { show ? 
        (<>
        <span className="profile__error"> {props.errorApi || ''} </span>
        <button className="profile__btn-edit" type="button" onClick={shows}> Редактировать </button>
        <button className="profile__btn-logout" type="button" onClick={props.onLogOut}> Выйти из аккаунта </button>
        </>) :
        (<>
        <button className={(isValid && isInfo)  ?  "profile__btn profile__btn_valid" : "profile__btn profile__btn_error-validation"} disabled={!(isValid && isInfo) } type="submit"> Сохранить </button>
        </>)}
        </form>
        </section>
    )
}

export default Profile;