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
    dispatch({ type: 'SEARCHRES', payload: res.data });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const book = (ev) => (dispatch) => {
  ev.preventDefault();
  request.sendPost('user/book', ev.target).then((res) => {
    console.log(res);
  });
};

export default {
  userupdate, getuser, search, book,
};
