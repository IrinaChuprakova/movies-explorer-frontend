const BASE_URL = 'https://diplom.nomoredomains.icu/api';

//статус запроса
function checkStatus(res){
  if (res.ok){
    return res.json();
  }
  else{
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
};

//заголовок для авторизованного пользователя
function getHeaders(){
  return {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json'
  }
 };

//создаёт пользователя с переданными в теле name, email, password
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name,email, password })
  })
    .then(checkStatus)
};

//проверяет переданные в теле почту и пароль и возвращает токен
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "same-origin",
    body: JSON.stringify({ email, password }),
  })
    .then(checkStatus)
};

//возвращает информацию о пользователе name, emai
export const  getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`,{
    method: 'GET',
    headers: getHeaders(),
  })
  .then(checkStatus)
}

//обновляет информацию о пользователе name, emai
export const updateUserInfo = (name, email) =>{
  return fetch(`${BASE_URL}/users/me`,{
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({name, email})
  })
  .then(checkStatus)
}

//возвращает все сохранённые текущим  пользователем фильмы
  export const getInitialMovie= () => {
    return fetch(`${BASE_URL}/movies`,{
      method: 'GET',
      headers: getHeaders()
    })
    .then(checkStatus);
  }

//создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId 
export const createMovie = (country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) =>{
  return fetch(`${BASE_URL}/movies`,{
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({})
    })
    .then(checkStatus);
  }

//удаляет сохранённый фильм по id
export const removeMovie = (movieId) =>{
  return fetch(`${BASE_URL}/movies/${movieId}`,{
      method: 'DELETE',
      headers: getHeaders()
    })
    .then(checkStatus);
  }