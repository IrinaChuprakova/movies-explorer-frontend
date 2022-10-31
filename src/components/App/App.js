import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import HeaderAuth from '../Header/HeaderAuth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const [isInfoTooltip, setInfoTooltip] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [email, setEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    MainApi
      .getUserInfo()
      .then((profileInfo) => {
        setCurrentUser(profileInfo.user);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleRegister(name, email, password) {
    MainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          // setInfoTooltip(true);
          // setStatus(true);
          // history.push("/");
          console.log(res)
        }
      })
      .catch(() => {
        // setInfoTooltip(true);
        // setStatus(false);
      })
  }

  function handleLogin(email, password) {
    MainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          // setEmail(res.email);
          setEmail(res);
          setLoggedIn(true);
          MainApi
            .getUserInfo()
            .then((profileInfo) => {
              console.log(profileInfo)
              // setCurrentUser(profileInfo.user);
            })
            .catch((error) => console.log(error));
          // MainApi
          //   .getInitialCards()
          //   .then((cards) => {
          //     setCards(cards.card);
          //   })
          //   .catch((error) => console.log(error));
          history.push("/");
        }
      })
      .catch((error) => { console.log(error); })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>


      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <HeaderAuth />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <HeaderAuth />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <HeaderAuth />
          <Profile />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>

        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>

        {/* <Route path="/h">
        <Sidebar/>
        </Route> */}

        <Route path="*">
          <NotFound />
        </Route>




      </Switch>


    </CurrentUserContext.Provider>
  )
}

export default App;
