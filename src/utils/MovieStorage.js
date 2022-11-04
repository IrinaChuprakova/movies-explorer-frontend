export const getMovies = () => {
    return JSON.parse(localStorage.getItem("movies"));
}

export const setMovies = (movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
}