import request from '../../helpers/communication';

const userupdate = (e) => (dispatch) => {
  request.sendPost('user/update', e.target).then(() => {
    dispatch({ type: 'USERUPDATE' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const getuser = () => (dispatch) => {
  request.get('user/getuser').then((res) => {
    dispatch({ type: 'GETUSER', payload: res.data });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

export default {
  userupdate, getuser,
};
