import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <NavLink to='/login'>SignUp</NavLink>
          <NavLink to='/friendList'>Friends</NavLink>
          <NavLink to='/addFriend'>Add Friends</NavLink>
        </nav>

        <Route exate path='/login' component={SignUp} />
        <PrivateRoute path='/friendList' component={FriendList}/>
        <PrivateRoute path='/addFriend' component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;
