import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import authAction from '../../store/action/authAction';

function Login() {
  //const counter = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <form onSubmit={(e) => { e.preventDefault(); dispatch(authAction.login(e)); }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email address
            <input type="email" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </label>
          <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Password
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
