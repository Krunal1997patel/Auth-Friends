import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>

        </nav>

        <Route to='/' component={SignUp} />
        
      </div>
    </Router>
  );
}

export default App;
