/* global $ */
import request from '../../helpers/communication';

const addlocation = (e) => (dispatch) => {
  const { target } = e;
  request.sendPost('admin/addlocation', target).then((res) => {
    target.reset();
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

const editlocation = (e, id) => (dispatch) => {
  const { target } = e;
  const formData = new FormData(target);
  request.sendPost('admin/editlocation', { ...Object.fromEntries(formData), id }).then((res) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'ADDLOCATION' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const addvehicletype = (e) => (dispatch) => {
  const { target } = e;
  request.sendPost('admin/addvehicletype', target).then((res) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'ADDVEHICLETYPE' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const getvehicletype = () => (dispatch) => {
  request.get('admin/getvehicletype').then((res) => {
    dispatch({ type: 'GETVEHICLETYPE', payload: res.data });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const deletevehicletype = (id) => (dispatch) => {
  request.sendPost('admin/deletevehicletype', { id }).then((res) => {
    dispatch({ type: 'ADDVEHICLETYPE' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

const editvehicletype = (e, id) => (dispatch) => {
  const { target } = e;
  const formData = new FormData(target);
  request.sendPost('admin/editvehicletype', { ...Object.fromEntries(formData), id }).then((res) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'ADDVEHICLETYPE' });
  }, () => {
    // dispatch({ type: 'ERROR' });
  });
};

export default {
  addlocation,
  getlocations,
  deletelocation,
  editlocation,
  addvehicletype,
  getvehicletype,
  deletevehicletype,
  editvehicletype,
};
