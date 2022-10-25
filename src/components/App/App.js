import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} />

      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route  path="/movies">
          <Movies/>
        </Route>

        <Route  path="/saved-movies">
          <SavedMovies/>
        </Route>

        <Route  path="/profile">
          <Profile/>
        </Route>

        <Route  path="/signin">
          <Login/>
        </Route>



      </Switch>
      <Footer/>
      
    </CurrentUserContext.Provider>
  )
}

export default App;
