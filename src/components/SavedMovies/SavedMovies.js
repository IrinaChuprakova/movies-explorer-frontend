import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

function Movies(){
    return(
        <div className="movies">
                <SearchForm/>
         <ul className="movies__list">

        <MoviesCard/>
        </ul>
        </div>

    )
}

export default Movies;