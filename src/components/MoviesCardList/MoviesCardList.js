import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import * as MovieStorage from '../../utils/MovieStorage';
import Preloader from '../../components/Preloader/Preloader'
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

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
          ExitOnError={props.ExitOnError}
        />)
    }

    // const isFull = props.cards.length === MovieStorage.getMovies().length;

    return(
        <div className="cards">
        {
           (props.load) ? (<Preloader/>) : ('')
        }
        {
          (props.infoMessage) ? ( <p className="infoMessage">Ничего не найдено</p>) : ('')
        }
        
        <ul className="cards__list">
        {props.cards.map(mapCards)}
        </ul>
        {
          location.pathname === "/movies" 
            ? (props.isFull ? (<button className="cards__more" type="button" onClick={props.loadMore}>Ещё</button>): (null))
            : (null)
        }
        
      </div>
    )
}

export default MoviesCardList;