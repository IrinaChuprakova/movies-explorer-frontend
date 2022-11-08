import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import React from 'react';
import * as MovieStorage from "../../utils/MovieStorage";

function SavedMovies(props) {
    return (
        <div className="movies">
            <SearchForm 
            search={props.search}
            handleCheckbox={props.handleCheckbox}
            setCards={props.setCards}
            checked={props.checked}
            />
        <MoviesCardList
            cards={MovieStorage.getSavedMovies()}
        />
        </div>

    )
}

export default SavedMovies;


