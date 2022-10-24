import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main/>
      {/* <Routes>
        <Route exact path="/">
          
        </Route>
      </Routes> */}
      <Footer/>
    </CurrentUserContext.Provider>
  )
}

export default App;
