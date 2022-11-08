export const getMovies = () => {
    const movies = localStorage.getItem("movies");

    if (movies === null) {
        return [];
    }

    return JSON.parse(movies);
}

export const setMovies = (movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
}

export const getSavedMovies = () => {
    const movies = localStorage.getItem("savedMovies");

    if (movies === null) {
        return [];
    }
    
    return JSON.parse(movies);
}

export const setSavedMovies = (savedMovies) => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
}

export const removeFromSavedMovies = (id) => {
    const movies = localStorage.getItem("savedMovies");

    if (movies === null) {
        return;
    }

    const array = JSON.parse(movies);
    const result = array.filter(movie => movie.movieId !== id);
    localStorage.setItem("savedMovies", JSON.stringify(result));
}

export const addSavedMovie = (movie) => {
    const movies = localStorage.getItem("savedMovies");

    if (movies === null) {
        localStorage.setItem("savedMovies", JSON.stringify([movie]));
        return;
    }

    const array = JSON.parse(movies);
    array.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(array));
}