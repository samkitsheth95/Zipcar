import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './common/Home/Home';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import UserHome from './user/userHome/userHome';
import UserProfile from './user/UserProfile/UserProfile';
import AdminHome from './admin/adminHome/adminHome';
import Dashboard from './admin/adminDashboard/dashboard';
import Locations from './admin/Locations/Locations';
import authAction from './store/action/authAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authAction.isioggedin());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userHome" component={UserHome} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/locations" component={Locations} />
      </Switch>
    </Router>
  );
}

export default App;
