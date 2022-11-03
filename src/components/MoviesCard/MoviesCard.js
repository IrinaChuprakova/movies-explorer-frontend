import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  return (
      <li className="movie">
        <img src="" className="movie__img" alt="Постер к фильму"/>
        <div className="movie__box">
          <h2 className="movie__name">jjjjj</h2>
          <button className="movie__button_save" type="button"></button>
        </div>
        <p className="movie__duration">jjj</p>
      </li>
  );
}

export default MoviesCard;
