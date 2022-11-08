import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MovieStorage from "../../utils/MovieStorage";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [errorApi, setErrorApi] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [more, setMore] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    MainApi.getSavedMovies()
      .then(res => {
        MovieStorage.setSavedMovies(res.movie);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    MainApi.getUserInfo()
      .then((profileInfo) => {
        setCurrentUser(profileInfo.user);
      })
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', checkWidth);
    resizeCards(checked);
  }, [width])

  function checkWidth(){
    setWidth(window.innerWidth)
  }
 
  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((error) => {
        setErrorApi("Что-то пошло не так...");
        console.log(error);
      });
  }

  function handleLogin(email, password) {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          MainApi.getUserInfo()
            .then((profileInfo) => {
              setCurrentUser(profileInfo.user);
            })
            .catch((error) => console.log(error));
          history.push("/movies");
        }
      })
      .catch((error) => {
        setErrorApi("Что-то пошло не так...");
        console.log(error);
      });
  }

  function handleUpdate(name, email) {
    MainApi.updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res.user);
      })
      .catch((error) => {
        setErrorApi("Что-то пошло не так...");
        console.log(error);
      });
  }

  function Search(movie) {
    MoviesApi.getMovies(movie)
      .then((res) => {
        const movies = res.filter((item) => item.nameRU.trim().toLowerCase().includes(movie.toLowerCase()));
        MovieStorage.setMovies(movies);
        resizeCards(checked);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function resizeCards(checked) {
    const movies = checked
        ? MovieStorage.getMovies().filter(item => item.duration <= 40)
        : MovieStorage.getMovies();

    if (width>768) {
      setCards(movies.slice(0, 12));
      setMore(4);
      return;
    }
    
    if (width<=768 && width>480) {
      setCards(movies.slice(0, 8));
      setMore(2);
      return;
    }

    setCards(movies.slice(0, 5));
    setMore(2);
  }

  function handleCheckbox(evt) {
    setChecked(evt.target.checked);
    resizeCards(evt.target.checked);
  }

  function loadMore() {
    setCards(MovieStorage.getMovies().slice(0, cards.length + more));
  }

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.getContent(token)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
        .catch((error) => {
          if (404) {
            localStorage.removeItem("token");
          }
          console.log(error);
        });
    }
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/signin");
    localStorage.clear();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "*" ? null : (
        <Header loggedIn={loggedIn} />
      )}

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          search={Search}
          cards={cards}
          loadMore={loadMore}
          setCards={setCards}
          handleCheckbox={handleCheckbox}
          checked={checked}
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          cards={MovieStorage.getSavedMovies()}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onLogOut={handleLogOut}
          onUpdate={handleUpdate}
          errorApi={errorApi}
        />

        <Route path="/signin">
          <Login onLogin={handleLogin} errorApi={errorApi} />
        </Route>

        <Route path="/signup">
          <Register onRegister={handleRegister} errorApi={errorApi} />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      {location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/profile" ||
      location.pathname === "*" ? null : (
        <Footer />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
