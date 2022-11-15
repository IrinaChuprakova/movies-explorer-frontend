import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import * as MainApi from "../../utils/MainApi";
import * as MovieStorage from "../../utils/MovieStorage";
import React from 'react';

function SavedMovies(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [cards, setCards] = React.useState([]);
    const [checked, setChecked] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        const movies = MovieStorage.getSavedMovies();

        if (movies.length !== 0) {
            setCards(movies);
            return
        }

        MainApi.getSavedMovies()
          .then(res => {
            MovieStorage.setSavedMovies(res.movie);
            setCards(res.movie);
          })
          .catch(err => console.log(err));
      }, []);

    React.useEffect(() => {
        window.addEventListener('resize', checkWidth);
        resizeCards(checked);
    }, [width]);
    
    function checkWidth() {
        setWidth(window.innerWidth)
    }

    function search(movieName) {
        resizeCards(checked, movieName);
        setSearchQuery(movieName);
    }

    function updateCards() {
        resizeCards(checked, searchQuery);
    }

    function resizeCards(checked, movieName) {
        let movies = checked
            ? MovieStorage.getSavedMovies().filter(item => item.duration <= 40)
            : MovieStorage.getSavedMovies();

        if (movieName) {
            movies = movies.filter((item) => item.nameRU.trim().toLowerCase().includes(movieName.toLowerCase()))
        }
        
        setCards(movies);
      }

    function handleCheckbox(evt) {
        setChecked(evt.target.checked);
        resizeCards(evt.target.checked, searchQuery);
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
            updateCards={updateCards}
            ExitOnError={props.ExitOnError}
        />
        </div>
    )
}

export default SavedMovies;
