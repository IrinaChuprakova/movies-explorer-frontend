export const BASE_URL = 'https://diplom.nomoredomains.icu/api';

function checkStatus(res){
  if (res.ok){
    return res.json();
  }
  else{
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
};

function getHeaders(){
  return {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json'
  }
 };


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

export const  getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`,{
    method: 'GET',
    headers: getHeaders(),
  })
  .then(checkStatus)
}

////////////////////////////////////////
// updateAvatar(link){
//     const cardsUrl = `${this._baseUrl}/users/me/avatar `;
//     return fetch(cardsUrl,{
//       method: 'PATCH',
//       headers: getHeaders(),
//       body: JSON.stringify({avatar:link})
//     })
//     .then(this._checkStatus);
//   }

//   getUserInfo() {
//     const cardsUrl = `${this._baseUrl}/users/me`;
//     return fetch(cardsUrl,{
//       headers: getHeaders()
//     })
//     .then(this._checkStatus);
//   }

//   getInitialCards() {
//     const cardsUrl = `${this._baseUrl}/cards`;
//     return fetch(cardsUrl,{
//       headers: getHeaders()
//     })
//     .then(this._checkStatus);
//   }

//   sendCard(name,link){
//     const cardsUrl = `${this._baseUrl}/cards`;
//     return fetch(cardsUrl,{
//       method: 'POST',
//       headers: getHeaders(),
//       body: JSON.stringify({
//         name: name,
//         link: link
//       })
//     })
//     .then(this._checkStatus);
//   }


//   removeCard(cardId){
//     const cardsUrl = `${this._baseUrl}/cards/${cardId}`;
//     return fetch(cardsUrl,{
//       method: 'DELETE',
//       headers: getHeaders()
//     })
//     .then(this._checkStatus);
//   }
  

