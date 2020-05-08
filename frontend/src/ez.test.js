/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './common/Login/Login';
import Register from './common/Register/Register';
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Home from './common/Home/Home';
import UserHome from './user/UserHome/UserHome';
import UserProfile from './user/UserProfile/UserProfile';
import Locations from './admin/Locations/Locations';
import Vehicletype from './admin/Vehicletype/Vehicletype';
import Vehicle from './admin/Vehicle/Vehicle';
import Booking from './user/Booking/Booking';
import Member from './admin/Membership/Member';

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('App renders without crashing', () => {
    shallow(<Provider store={store}><App /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Login renders without crashing', () => {
    shallow(<Provider store={store}><Login /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Register renders without crashing', () => {
    shallow(<Provider store={store}><Register /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Home renders without crashing', () => {
    shallow(<Provider store={store}><Home /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('UserHome renders without crashing', () => {
    shallow(<Provider store={store}><UserHome /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('UserProfile renders without crashing', () => {
    shallow(<Provider store={store}><UserProfile /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Locations renders without crashing', () => {
    shallow(<Provider store={store}><Locations /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Vehicletype renders without crashing', () => {
    shallow(<Provider store={store}><Vehicletype /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Vehicle renders without crashing', () => {
    shallow(<Provider store={store}><Vehicle /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Booking renders without crashing', () => {
    shallow(<Provider store={store}><Booking /></Provider>);
  });
});

describe('React component test with Enzyme', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  
  it('Member renders without crashing', () => {
    shallow(<Provider store={store}><Member /></Provider>);
  });
});