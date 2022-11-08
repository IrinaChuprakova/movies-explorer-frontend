import './MoviesCard.css';
import React, { useState } from 'react';
import * as MainApi from "../../utils/MainApi";
import * as MovieStorage from "../../utils/MovieStorage";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const location = useLocation();

  function convertDuration(duration) {
    if (duration >= 60) {
      const hours = Math.trunc(duration/60);
      const minutes = duration % 60;
      return hours + 'ч' + minutes + 'м';
    }
    return duration + 'м';
  }

  function handleCardLike() {
    MainApi.createMovie(props.card)
      .then((res) => {
      console.log('laik')
      MovieStorage.addSavedMovie(res);
      setIsLiked(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCardDelete() {
    MainApi.removeMovie(MovieStorage.getSavedMovies().find(movie => movie.movieId === props.card.id)._id)
    .then((res) => {
     console.log('dislaik')
     MovieStorage.removeFromSavedMovies(props.card.id);
     setIsLiked(false)
    })
     .catch((error) => {
       console.log(error);
     });
  }

  const imageUrl = props.card._id
    ? props.card.image
    : `https://api.nomoreparties.co${props.card.image.url}`;

  return (
      <li className="movie">
      <a target="blank" href={props.card.trailerLink}>     
      <img src={imageUrl} className="movie__img" alt="Постер к фильму"/>
      </a>
        <div className="movie__box">
          <h2 className="movie__name">{props.card.nameRU}</h2>         
          {
            location.pathname === "/saved-movies" 
            ? (<button className="movie__button_delete" type="button" onClick={handleCardDelete}></button>)
            : (!isLiked 
                  ? (<button className="movie__button" type="button" onClick={handleCardLike}></button>) 
                  : (<button className="movie__button_save" type="button" onClick={handleCardDelete}></button>))
          }
        </div>
        <p className="movie__duration">{convertDuration(props.card.duration)}</p>
      </li>
      
  );
}

export default MoviesCard;
