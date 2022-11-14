import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css'
import * as MoviesApi from "../../utils/MoviesApi";
import * as MovieStorage from "../../utils/MovieStorage";
import * as MainApi from "../../utils/MainApi";
import React from "react";

function Movies(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [cards, setCards] = React.useState([]);
    const [findedCards, setFindedCards] = React.useState([]);
    const [checked, setChecked] = React.useState(localStorage.getItem("movies_checked") === 'true');
    const [load, setLoad] = React.useState(false);
    const [more, setMore] = React.useState(0);
    const [infoMessage, setInfoMessage] = React.useState(false);
    const [isFull, setIsFull] = React.useState(false);
    const searchQuery = localStorage.getItem("searchQuery");

    React.useEffect(() => {
      if (searchQuery === "" || searchQuery === null || searchQuery === undefined) {
        return;
      }
      search(searchQuery);
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', checkWidth);
        resizeCards(checked);
    }, [width]);

    React.useEffect(() => {
      resizeCards(checked);
    }, [findedCards]);
    
    function checkWidth() {
        setWidth(window.innerWidth)
    }

    async function search(movie) {
        localStorage.setItem("searchQuery", movie)

        if (MovieStorage.getMovies().length === 0) {
          setLoad(true);
          await MoviesApi.getMovies(movie)
          .then((res) => {
            MovieStorage.setMovies(res);
            setLoad(false)
          })
          .catch((error) => {
            console.log(error);
          });
          if (MovieStorage.getSavedMovies().length === 0) {
            await MainApi.getSavedMovies()
              .then(res => {
                MovieStorage.setSavedMovies(res.movie);
              })
              .catch(err => console.log(err));
          }
        }

        const movies = MovieStorage
          .getMovies()
          .filter((item) => item.nameRU.trim().toLowerCase().includes(movie.toLowerCase()));
        if (movies.length === 0 ) { 
          setInfoMessage(true)
        } else {
          setInfoMessage(false)
        }
        setFindedCards(movies);
    }

    function resizeCards(checked) {
        const movies = checked
            ? findedCards.filter(item => item.duration <= 40)
            : findedCards;
    
        if (width>768) {
          setCards(movies.slice(0, 12));
          setMore(4);
          if (movies.length > 12) {
            setIsFull(true)
          }
          else {
            setIsFull(false)
          }
          return;
        }
        
        if (width<=768 && width>480) {
          setCards(movies.slice(0, 8));
          setMore(2);
          if (movies.length > 8) {
            setIsFull(true)
          }
          else {
            setIsFull(false)
          }
          return;
        }
    
        setCards(movies.slice(0, 5));
        if (movies.length > 5) {
          setIsFull(true)
        }
        else {
          setIsFull(false)
        }
        setMore(2);
      }
    
      function loadMore() {
        setCards(findedCards.slice(0, cards.length + more));
      }
    
      function handleCheckbox(evt) {
        localStorage.setItem("movies_checked", evt.target.checked);
        setChecked(evt.target.checked);
        resizeCards(evt.target.checked);
      }

    return(
        <div className="movies">
        <SearchForm 
            search={search}
            handleCheckbox={handleCheckbox}
            checked={checked}
            searchQuery={searchQuery}
        />
        <MoviesCardList
            cards={cards}
            loadMore={loadMore}
            load={load}
            infoMessage={infoMessage}
            ExitOnError={props.ExitOnError}
            isFull={isFull}
        />
        </div>
    )
}

export default Movies;