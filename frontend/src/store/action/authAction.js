import request from '../../helpers/communication';

const register = (e, history) => (dispatch) => {
  request.sendPost('auth/register', e.target).then(() => {
    dispatch({ type: 'REGISTER' });
    history.push('/login');
  }, () => {
    dispatch({ type: 'REGISTER_ERROR' });
  });
};

const login = (e, history) => (dispatch) => {
  request.sendPost('auth/login', e.target).then((resp) => {
    console.log(resp);
    dispatch({ type: 'LOGIN' });
    history.push('/');
  }, () => {
    dispatch({ type: 'LOGIN_ERROR' });
  });
};

const logout = () => (dispatch) => {
  request.get('auth/logout').then(() => {
    dispatch({ type: 'LOGOUT' });
  });
};

const isadmin = () => (dispatch) => {
  dispatch({ type: 'ISADMIN' });
};

export default {
  register, login, logout, isadmin,
};
