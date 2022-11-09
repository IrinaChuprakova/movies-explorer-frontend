import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import * as MovieStorage from "../../utils/MovieStorage";
import React from 'react';

function SavedMovies() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [cards, setCards] = React.useState(MovieStorage.getSavedMovies());
    const [checked, setChecked] = React.useState(localStorage.getItem("saved_movies_checked") === 'true');

    React.useEffect(() => {
        window.addEventListener('resize', checkWidth);
        resizeCards(checked);
    }, [width]);
    
    function checkWidth() {
        setWidth(window.innerWidth)
    }

    function search(movieName) {
        resizeCards(checked, movieName);
    }

    function resizeCards(checked, movieName) {
        let movies = checked
            ? MovieStorage.getSavedMovies().filter(item => item.duration <= 40)
            : MovieStorage.getSavedMovies();

        if (movieName) {
            movies = movies.filter((item) => item.nameRU.trim().toLowerCase().includes(movieName.toLowerCase()))
        }
    
        if (width>768) {
          setCards(movies.slice(0, 12));
          return;
        }
        
        if (width<=768 && width>480) {
          setCards(movies.slice(0, 8));
          return;
        }
    
        setCards(movies.slice(0, 5));
      }

    function handleCheckbox(evt) {
        localStorage.setItem("saved_movies_checked", evt.target.checked);
        setChecked(evt.target.checked);
        resizeCards(evt.target.checked);
    }

    return (
        <div className="movies">
            <SearchForm 
            search={search}
            handleCheckbox={handleCheckbox}
            setCards={setCards}
            checked={checked}
            />
        <MoviesCardList
            cards={cards}
            setCards={setCards}
        />
        </div>
    )
}

export default SavedMovies;
