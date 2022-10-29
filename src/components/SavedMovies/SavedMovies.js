import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import '../MoviesCardList/MoviesCardList';
import '../MoviesCard/MoviesCard';
import img from '../../images/i.png';

function Movies() {
    return (
        <div className="movies">
            <SearchForm />
            <div className="cards">
                <ul className="cards__list">
                    <li className="movie">
                        <img src={img} className="movie__img" alt="Постер к фильму" />
                        <div className="movie__box">
                            <h2 className="movie__name">33 слова о дизайне</h2>
                            <button className="movie__button_delete" type="button"></button>
                        </div>
                        <p className="movie__duration">1ч42м</p>
                    </li>
                    <li className="movie">
                        <img src={img} className="movie__img" alt="Постер к фильму" />
                        <div className="movie__box">
                            <h2 className="movie__name">33 слова о дизайне</h2>
                            <button className="movie__button_delete" type="button"></button>
                        </div>
                        <p className="movie__duration">1ч42м</p>
                    </li>
                    <li className="movie">
                        <img src={img} className="movie__img" alt="Постер к фильму" />
                        <div className="movie__box">
                            <h2 className="movie__name">33 слова о дизайне</h2>
                            <button className="movie__button_delete" type="button"></button>
                        </div>
                        <p className="movie__duration">1ч42м</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Movies;


