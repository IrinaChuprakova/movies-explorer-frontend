import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(){
    return(
        <div className="cards">
        <ul className="cards__list">
          {/* {props.cards.map((film) => (
            <MoviesCard
              key={film._id}
              film={film}
            />))} */}
            <MoviesCard/>
        </ul>
        <button className="cards__more">Ещё</button>
      </div>
    )
}

export default MoviesCardList;