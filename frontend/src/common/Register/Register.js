import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import authAction from '../../store/action/authAction';
import './Register.css';

function Register() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="REGISTER text-center vertical-align">
        <form onSubmit={(e) => { e.preventDefault(); dispatch(authAction.register(e, history)); }} className="form-signin">
          <h3 className="mb-3 font-weight-normal">Register</h3>
          { auth.registerError && (
          <div className="alert alert-danger" role="alert">
            Invalid User details
          </div>
          )}
          <input type="text" name="name" id="inputName" className="form-control" placeholder="Name" required />
          <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
          <input type="password" name="password" id="inputPass" className="form-control" placeholder="Password" required />
          <span className="mr-5">Are you a admin?</span>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="companyRadio1">
              <input className="form-check-input" onChange={() => { dispatch(authAction.isadmin()); }} type="radio" name="isAdmin" id="companyRadio1" value="1" checked={auth.isAdmin} />
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="companyRadio0">
              <input className="form-check-input" onChange={() => { dispatch(authAction.isadmin()); }} type="radio" name="isAdmin" id="companyRadio0" value="0" checked={!auth.isAdmin} />
              No
            </label>
          </div>
          <br />
          { auth.isAdmin && (
          <input type="password" name="passcode" id="Passcode" className="form-control" placeholder="passcode" required />
          )}
          <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
