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
      MovieStorage.addSavedMovie(res.movie);
      setIsLiked(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCardDelete() {
    MainApi.removeMovie(MovieStorage.getSavedMovies().find(movie => movie.movieId === props.card.movieId)._id)
    .then((res) => {
     MovieStorage.removeFromSavedMovies(props.card.movieId);
     setIsLiked(false)
     if (location.pathname === "/saved-movies") {
      props.setCards(MovieStorage.getSavedMovies());
     }
    })
     .catch((error) => {
       console.log(error);
     });
  }

  return (
      <li className="movie">
      <a target="blank" href={props.card.trailerLink}>     
      <img src={props.card.image} className="movie__img" alt="Постер к фильму"/>
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
