import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './common/Home/Home';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import userHome from './common/user/userHome/userHome';
import userProfile from './common/user/UserProfile/UserProfile';
import adminHome from './common/admin/adminHome/adminHome';
import dashboard from './common/admin/adminDashboard/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userHome" component={userHome} />
        <Route exact path="/userProfile" component={userProfile} />
        <Route exact path="/adminHome" component={adminHome} />
        <Route exact path="/dashboard" component={dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
