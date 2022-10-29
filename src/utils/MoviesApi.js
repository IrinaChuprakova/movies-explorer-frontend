export class MoviesApi{
    constructor({baseUrl,headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkStatus(res){
        if (res.ok){
          return res.json();
        }
        else{
         return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        }
      }

      getMovies() {
        const cardsUrl = `${this._baseUrl}/cards`;
        return fetch(cardsUrl,{
          headers: getHeaders()
        })
        .then(this._checkStatus);
      }
    }