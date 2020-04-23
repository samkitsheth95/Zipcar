import request from '../../helpers/communication';

const userupdate = (e, history) => (dispatch) => {
  request.sendPost('user/update', e.target).then(() => {
    dispatch({ type: 'USERUPDATE' });
  }, () => {
    //dispatch({ type: 'REGISTER_ERROR' });
  });
};

export default {
  userupdate,
};
