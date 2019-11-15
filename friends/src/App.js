import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Nav from './components/Nav'
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Nav/>

        <Route exact path='/' component={SignUp} />
        <PrivateRoute path='/friendList' component={FriendList}/>
        <PrivateRoute path='/addFriend' component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;
