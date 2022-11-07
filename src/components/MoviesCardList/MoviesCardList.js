import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props){

    return(
        <div className="cards">
        <ul className="cards__list">
        {props.cards.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              onCardSave={props.onCardSave}
              saveMovie={props.saveMovie}
              setSaveMovie={props.setSaveMovie}
            />))}
        </ul>
        <button className="cards__more" type="button" onClick={props.loadMore}>Ещё</button>
      </div>
    )
}

export default MoviesCardList;