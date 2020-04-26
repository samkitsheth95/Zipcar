/* global $ */
import request from '../../helpers/communication';

const addlocation = (e) => (dispatch) => {
  request.sendPost('admin/addlocation', e.target).then((res) => {
    $('.modal').modal('hide');
    dispatch({ type: 'ADDLOCATION' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const getlocations = () => (dispatch) => {
  request.get('admin/getlocations').then((res) => {
    dispatch({ type: 'GETLOCATIONS', payload: res.data });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const deletelocation = (id) => (dispatch) => {
  request.sendPost('admin/deletelocation', { id }).then((res) => {
    dispatch({ type: 'ADDLOCATION' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

export default {
  addlocation, getlocations, deletelocation,
};
