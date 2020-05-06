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

const book = (ev, history) => (dispatch) => {
  ev.preventDefault();
  const { target } = ev;
  request.sendPost('user/book', target).then((res) => {
    console.log(res.data);
    target.reset();
    $('.modal').modal('hide');
    history.push('/booking');
  });
};

const getbooking = () => (dispatch) => {
  request.get('user/getbooking').then((res) => {
    //console.log(res.data);
    dispatch({ type: 'GETBOOKING', payload: res.data });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

export default {
  userupdate, getuser, search, book, getbooking,
};
