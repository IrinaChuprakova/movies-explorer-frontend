import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import * as MovieStorage from "../../utils/MovieStorage";

function MoviesCardList(props) {
    const savedMovies = MovieStorage.getSavedMovies();

    function mapCards(card) {
      const savedMovie = savedMovies.find(movie => movie.movieId === card.movieId);
      const isLiked = savedMovie ? true : false;

      return (
        <MoviesCard
          isLiked = {isLiked}
          key={card.movieId}
          card={card}
          onCardSave={props.onCardSave}
          setCards={props.setCards}
        />)
    }

    return(
        <div className="cards">
        <ul className="cards__list">
        {props.cards.map(mapCards)}
        </ul>
        <button className="cards__more" type="button" onClick={props.loadMore}>Ещё</button>
      </div>
    )
}

export default MoviesCardList;