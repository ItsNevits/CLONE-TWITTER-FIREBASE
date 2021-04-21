import "./App.scss";
import Login from "./views/Login";
import Home from "./views/Home";

import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) setFirebaseUser(user);
        else setFirebaseUser(null);
      });
    };

    fetchUser();
  }, []);

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));

      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to='/login' {...rest} />;
      }
    } else {
      return <Redirect to='/login' {...rest} />;
    }
  };
  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} exact path='/' />
          <Route component={Login} exact path='/login' />
          <RutaPrivada component={Home} exact path='/home' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
