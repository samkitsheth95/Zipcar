/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './common/Login/Login';
import Register from './common/Register/Register';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });
});