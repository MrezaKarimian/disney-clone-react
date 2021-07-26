import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header"; 
import Home from "./Components/Home";
import Detail from "Components/Detail";
import Login from "Components/Login";
// import db from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const [moive , setMovie] = useState();

  // useEffect(()=> {
  //   db.collection('movie').onSnapshot(snapshot => {
  //     console.log(snapshot.docs.map(doc => doc.data()))
  //     // setMovie(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [])


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
