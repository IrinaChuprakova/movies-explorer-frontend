import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return(
    <CurrentUserContext.Provider value={currentUser}>
     

      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer/>
        </Route>

        <Route  path="/movies">
          <HeaderAuth/>
          <Movies/>
          <Footer/>
        </Route>

        <Route  path="/saved-movies">
          <HeaderAuth/>
          <SavedMovies/>
          <Footer/>
        </Route>

        <Route  path="/profile">
          <HeaderAuth/>
          <Profile/>
        </Route>

        <Route  path="/signin">
          <Login/>
        </Route>

        <Route  path="/signup">
          <Register/>
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
