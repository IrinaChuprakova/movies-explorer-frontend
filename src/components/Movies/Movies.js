import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css'
function Movies(props){
    return(
        <div className="movies">
        <SearchForm search={props.search}/>
        <MoviesCardList
            cards={props.cards}
            // onCardSave={props.onCardSave}
            // onCardDelete={props.onCardDelete}  
        />
        </div>

    )
}

export default Movies;