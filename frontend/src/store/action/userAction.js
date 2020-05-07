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
  }, (res, data) => {
    console.log(res.error);
    // dispatch({ type: 'ERROR' });
  });
};

const getbooking = () => (dispatch) => {
  request.get('user/getbooking').then((res) => {
    // console.log(res.data);
    dispatch({ type: 'GETBOOKING', payload: res.data });
  }).catch((error) => {
    if (error.res) {
      // Request made and server responded
      console.log(error.res.data);
      console.log(error.res.status);
      console.log(error.res.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
   // console.log(error.response.data);
  });
};

export default {
  userupdate, getuser, search, book, getbooking,
};
