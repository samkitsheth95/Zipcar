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
      dispatch({ type: 'BOOKINGERR', payload: '' });
    })
    .catch((error) => {
      target.reset();
      $('.modal').modal('hide');
      const vehicletype = error.response.data.vehicleType;
      const name = '';
      request.sendPost('user/search', { vehicletype, name })
        .then((res) => {
          dispatch({ type: 'SEARCHRES', payload: res.data });
          dispatch({ type: 'BOOKINGERR', payload: error.response.data.error });
        });
      history.push('/userhome');
    });
};

const getbooking = () => (dispatch) => {
  request.get('user/getbooking').then((res) => {
    dispatch({ type: 'GETBOOKING', payload: res.data });
  });
};

const deletebooking = (e, id, isDelete) => (dispatch) => {
  const { target } = e;
  request.sendPost('user/deletebooking', { id, isDelete })
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
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
