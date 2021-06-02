import React from 'react'
import NavBar from './components/NavBar'
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
