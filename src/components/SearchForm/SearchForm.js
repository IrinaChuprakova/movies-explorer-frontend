import './SearchForm.css';
import search from '../../images/search.svg';

function SearchForm(){
    return(
        <div className="search-form">
        <form className="search-form__form">
        <img src={search}/>
        <input className="search-form__input" type="text" placeholder="Фильм"></input>
        <button className="search-form__btn" type="submit"></button>
        <span className="search-form__border"></span>
        <input className="search-form__checkbox" type="checkbox"></input>
        <span className="search-form__text"> Короткометражки </span>
        </form>
        </div>

    )
}

export default SearchForm;