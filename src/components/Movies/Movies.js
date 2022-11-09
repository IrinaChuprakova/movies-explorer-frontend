import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css'
import * as MoviesApi from "../../utils/MoviesApi";
import * as MovieStorage from "../../utils/MovieStorage";
import React from "react";

function Movies() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [cards, setCards] = React.useState([]);
    const [checked, setChecked] = React.useState(localStorage.getItem("movies_checked") === 'true');
    const [load, setLoad] = React.useState(false);
    const [more, setMore] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener('resize', checkWidth);
        resizeCards(checked);
    }, [width]);
    
    function checkWidth() {
        setWidth(window.innerWidth)
    }

    function search(movie) {
        setLoad(true)
        MoviesApi.getMovies(movie)
          .then((res) => {
            const movies = res.filter((item) => item.nameRU.trim().toLowerCase().includes(movie.toLowerCase()));
            MovieStorage.setMovies(movies);
            resizeCards(checked);
            setLoad(false)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    function resizeCards(checked) {
        const movies = checked
            ? MovieStorage.getMovies().filter(item => item.duration <= 40)
            : MovieStorage.getMovies();
    
        if (width>768) {
          setCards(movies.slice(0, 12));
          setMore(4);
          return;
        }
        
        if (width<=768 && width>480) {
          setCards(movies.slice(0, 8));
          setMore(2);
          return;
        }
    
        setCards(movies.slice(0, 5));
        setMore(2);
      }
    
      function loadMore() {
        setCards(MovieStorage.getMovies().slice(0, cards.length + more));
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
            setCards={setCards}
            checked={checked}
        />
        <MoviesCardList
            cards={cards}
            loadMore={loadMore}
            load={load}
        />
        </div>
    )
}

export default Movies;