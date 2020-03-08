import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './common/Home/Home';
import Login from './common/Login/Login';
import Register from './common/Register/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
