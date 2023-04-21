export const getMovies = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      }
    })
    .then((res) => {
      return res.map(movie => {
        return {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
        };
      });
    });
}


