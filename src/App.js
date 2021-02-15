import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header | Navigation Bar */}
     
 
      <Router>
         <Header />
         <Switch>
            <Route path="/chat">
              <h1>I am the chatpage</h1>
            </Route>

            <Route path="/">
              <TinderCards />
              <SwipeButtons />
              <h1></h1>
            </Route>
         </Switch>

      </Router>

      {/* Treender Cards */}      
      {/* Button below cards */}

      {/* Chat Screen ( Optional ) */}
      {/* Individual catch screen ( Optional ) */}
 
    </div>
  );
}

export default App;
