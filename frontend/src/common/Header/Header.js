import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../store/action/authAction';

function Header() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          { !auth.loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/Register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/login">Login</NavLink>
            </li>
          </ul>
          )}
          { auth.loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/" onClick={() => { dispatch(authAction.logout()); }}>Logout</NavLink>
            </li>
          </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
