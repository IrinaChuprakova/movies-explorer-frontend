import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css'
function Movies(props){
    return(
        <div className="movies">
        <SearchForm 
            search={props.search}
            handleCheckbox={props.handleCheckbox}
            setCards={props.setCards}
            checked={props.checked}
        />
        <MoviesCardList
            cards={props.cards}
            loadMore={props.loadMore}
        />
        </div>

    )
}

export default Movies;