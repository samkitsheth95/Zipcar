import { useHistory } from 'react-router-dom';
import request from '../../helpers/communication';

//let history = useHistory();

const register = (e) => async (dispatch) => {
  //  console.log(e.target)
  request.sendPost('auth/register', e.target).then(() => {
    dispatch({ type: 'REGISTER' });
    //history.push('/login');
  }, () => {
    dispatch({ type: 'REGISTER_ERROR' });
  });
};

const login = (e) => async (dispatch) => {
  //  console.log(e.target)
  request.sendPost('auth/login', e.target).then(() => {
    dispatch({ type: 'LOGIN' });
    //history.push('/login');
  }, () => {
    dispatch({ type: 'LOGIN_ERROR' });
  });
};


export default {
  register, login,
};
