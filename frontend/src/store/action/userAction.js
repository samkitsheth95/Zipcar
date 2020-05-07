/* global $ */
import request from '../../helpers/communication';

const userupdate = (e) => (dispatch) => {
  request.sendPost('user/update', e.target).then(() => {
    $('.modal').modal('hide');
    dispatch({ type: 'USERUPDATE' });
  });
};

const getuser = () => (dispatch) => {
  request.get('user/getuser').then((res) => {
    dispatch({ type: 'GETUSER', payload: res.data });
  });
};

const search = (e) => (dispatch) => {
  request.sendPost('user/search', e.target).then((res) => {
    dispatch({ type: 'SEARCHRES', payload: res.data });
  });
};

const book = (ev, history) => (dispatch) => {
  ev.preventDefault();
  const { target } = ev;
  request.sendPost('user/book', target)
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      history.push('/booking');
      dispatch({ type: 'SEARCHCLEAR' });
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
};

const getbooking = () => (dispatch) => {
  request.get('user/getbooking').then((res) => {
    dispatch({ type: 'GETBOOKING', payload: res.data });
  });
};

const deletebooking = (id, isDelete) => (dispatch) => {
  request.sendPost('user/deletebooking', { id, isDelete })
    .then(() => {
      dispatch({ type: 'UPDATEBOOKING' });
    });
};

export default {
  userupdate,
  getuser,
  search,
  book,
  getbooking,
  deletebooking,
};
