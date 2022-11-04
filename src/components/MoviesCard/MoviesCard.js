import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {

  function convertDuration(duration){
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    return hours + 'ч' + minutes + 'м';
  }

  return (
      <li className="movie">
        <img src={`https://api.nomoreparties.co${props.card.image.url}`} className="movie__img" alt="Постер к фильму"/>
        <div className="movie__box">
          <h2 className="movie__name">{props.card.nameRU}</h2>
          <button className="movie__button" type="button"></button>
        </div>
        <p className="movie__duration">{convertDuration(props.card.duration)}</p>
      </li>
  );
}

export default MoviesCard;
