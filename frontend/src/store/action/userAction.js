/* global $ */
import request from '../../helpers/communication';

const userupdate = (e) => (dispatch) => {
  request.sendPost('user/update', e.target).then(() => {
    $('.modal').modal('hide');
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

const search = (e) => (dispatch) => {
  request.sendPost('user/search', e.target).then((res) => {
    console.log(res.data);
    // dispatch({ type: 'USERUPDATE' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

export default {
  userupdate, getuser, search,
};
