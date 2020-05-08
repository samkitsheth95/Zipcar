import request from '../../helpers/communication';

const register = (e, history) => (dispatch) => {
  request.sendPost('auth/register', e.target)
    .then(() => {
      dispatch({ type: 'REGISTER' });
      history.push('/login');
    })
    .catch((error) => {
      dispatch({ type: 'REGISTER_ERROR', payload: error.response.data });
    });
};

const login = (e, history) => (dispatch) => {
  request.sendPost('auth/login', e.target)
    .then((res) => {
      if (res.data.isAdmin) dispatch({ type: 'ISADMIN' });
      dispatch({ type: 'LOGIN' });
      if (res.data.isAdmin) {
        history.push('/vehicletype');
      } else {
        history.push('/userHome');
      }
    })
    .catch((error) => {
      dispatch({ type: 'LOGIN_ERROR', payload: error.response.data });
    });
};

const logout = (isAdmin) => (dispatch) => {
  request.get('auth/logout')
    .then(() => {
      if (isAdmin) dispatch({ type: 'ISADMIN' });
      dispatch({ type: 'LOGOUT' });
    });
};

const isioggedin = () => (dispatch) => {
  request.get('auth/logged_in')
    .then((res) => {
      if (res.data.logged_in) dispatch({ type: 'LOGIN' });
      if (res.data.isAdmin) dispatch({ type: 'ISADMIN' });
    });
};

const isadmin = () => (dispatch) => {
  dispatch({ type: 'ISADMIN' });
};

export default {
  register, login, logout, isadmin, isioggedin,
};
