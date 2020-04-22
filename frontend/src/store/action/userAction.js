import request from '../../helpers/communication';

const userupdate = (e, history) => (dispatch) => {
  request.sendPost('user/update', e.target).then(() => {
    //dispatch({ type: 'REGISTER' });
    //history.push('/login');
  }, () => {
    //dispatch({ type: 'REGISTER_ERROR' });
  });
};

export default {
  userupdate,
};
