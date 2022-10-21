import React from "react";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { Redirect,Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

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
    </CurrentUserContext.Provider>
  )
}

export default App;
