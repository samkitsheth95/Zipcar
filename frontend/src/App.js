import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './common/Home/Home';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import UserHome from './user/UserHome/UserHome';
import UserProfile from './user/UserProfile/UserProfile';
import Locations from './admin/Locations/Locations';
import Vehicletype from './admin/Vehicletype/Vehicletype';
import Vehicle from './admin/Vehicle/Vehicle';
import Booking from './user/Booking/Booking';
import Member from './admin/Membership/Member';
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
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/vehicletype" component={Vehicletype} />
        <Route exact path="/vehicle" component={Vehicle} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/member" component={Member} />
      </Switch>
    </Router>
  );
}

export default App;
