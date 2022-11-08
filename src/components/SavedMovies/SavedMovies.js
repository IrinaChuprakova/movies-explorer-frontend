import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import React from 'react';

function SavedMovies(props) {
    const [cards, setCards] = React.useState(props.cards);

    return (
        <div className="movies">
            <SearchForm 
            search={props.search}
            handleCheckbox={props.handleCheckbox}
            setCards={props.setCards}
            checked={props.checked}
            />
        <MoviesCardList
            cards={cards}
            setCards={setCards}
        />
        </div>

    )
}

export default SavedMovies;
