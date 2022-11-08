import React from "react";
import './SearchForm.css';
import search from '../../images/search.svg';

function SearchForm(props){
    const [movie, setMovie] = React.useState('');
    const [error, setError] = React.useState('');

    function handleMovie(evt) {
        setMovie(evt.target.value)
    }

    function handleSubmit(evt){
        evt.preventDefault();
        if (movie === "") {
            setError('Нужно ввести ключевое слово');
            return
        }
        setError('');
        props.search(movie);
    }

    return(
        <div className="search-form">
        <div className="search-form__form-box">
        <form className="search-form__form" onSubmit={handleSubmit}>
        <img src={search} alt="Иконка поиска"/>
        <input className="search-form__input" type="text" placeholder="Фильм" value={movie || ""} onChange={handleMovie}></input>
        <button className="search-form__btn" type="submit"></button>
        <div className="search-form-container">
        <span className="search-form__border"></span>
        <input className="search-form__checkbox" checked={props.checked} onChange={props.handleCheckbox} type="checkbox"></input>
        <span className="search-form__text"> Короткометражки </span>
        </div>
        </form>
        <span className="search-form__error">{error}</span>
        </div>
        </div>



    )
}

export default SearchForm;