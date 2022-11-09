import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as MainApi from "../../utils/MainApi";
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

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.getContent(token)
        .then((res) => {
          setLoggedIn(true);
          history.push(location.pathname);
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
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
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
