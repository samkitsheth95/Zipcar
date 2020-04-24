import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import authAction from '../../store/action/authAction';
import './Login.css';

function Login() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="LOGIN text-center vertical-align">
        <form onSubmit={(e) => { e.preventDefault(); dispatch(authAction.login(e, history)); }} className="form-signin">
          <img className="mb-4" alt="" src="zipcar.png" width="240" height="126" />
          <h3 className="mb-3 font-weight-normal">Sign In</h3>
          { auth.loginError && (
          <div className="alert alert-danger" role="alert">
            Invalid Username/Password
          </div>
          )}
          <input type="username" name="username" id="inputUsername" className="form-control" placeholder="Username" required />
          <input type="password" name="password" id="inputPass" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
