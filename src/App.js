import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  // TODO: Steps to deploy - cd into amazon folder 
  // firebase login
  // firebase init
  // >>>> Hosting >> Use Existing Project >> Public Directory = build
  // SPA ->> Yes
  // npm run build
  // firebase deploy

  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition
  // useEffect hook <<< Powerful
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
