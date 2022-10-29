import './SearchForm.css';
import search from '../../images/search.svg';

function SearchForm(){
    return(
        <div className="search-form">
        <div className="search-form__form-box">
        <form className="search-form__form">
        <img src={search} alt="Иконка поиска"/>
        <input className="search-form__input" type="text" placeholder="Фильм" required></input>
        <button className="search-form__btn" type="button"></button>
        <div className="search-form-container">
        <span className="search-form__border"></span>
        <input className="search-form__checkbox" type="checkbox"></input>
        <span className="search-form__text"> Короткометражки </span>
        </div>
        </form>
        </div>
        </div>



    )
}

export default SearchForm;