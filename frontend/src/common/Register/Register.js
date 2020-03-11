import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import authAction from '../../store/action/authAction';

function Register() {
  const counter = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <div>
      <Header />
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email address
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </label>
          <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Password
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </label>
        </div>
        <button type="submit" onClick={(e) => { e.preventDefault(); dispatch(authAction.register(e)); }} className="btn btn-primary">Register</button>
      </form>
      <h6>
        Counter: {counter.counter},{counter.loginError}
      </h6>
      <button type="button" onClick={() => dispatch(authAction.increment())}>Increase Counter</button>
    </div>
  );
}

export default Register;
