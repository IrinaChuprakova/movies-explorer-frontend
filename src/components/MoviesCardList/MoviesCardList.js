import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props){
    return(
        <div className="cards">
        <ul className="cards__list">
        {props.cards.map((card) => (
            <MoviesCard
              // key={}
              card={card}
              // onCardSave={props.onCardSave}
              // onCardDelete={props.onCardDelete}
            />))}
        </ul>
        <button className="cards__more" type="button">Ещё</button>
      </div>
    )
}

export default MoviesCardList;