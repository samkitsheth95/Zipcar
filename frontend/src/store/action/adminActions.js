/* global $ */
import request from '../../helpers/communication';

const addlocation = (e) => (dispatch) => {
  const { target } = e;
  request.sendPost('admin/addlocation', target)
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDLOCATION' });
    });
};

const getlocations = () => (dispatch) => {
  request.get('admin/getlocations')
    .then((res) => {
      dispatch({ type: 'GETLOCATIONS', payload: res.data });
    });
};

const deletelocation = (id) => (dispatch) => {
  request.sendPost('admin/deletelocation', { id })
    .then(() => {
      dispatch({ type: 'ADDLOCATION' });
    });
};

const editlocation = (e, id) => (dispatch) => {
  const { target } = e;
  const formData = new FormData(target);
  request.sendPost('admin/editlocation', { ...Object.fromEntries(formData), id })
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDLOCATION' });
    });
};

const addvehicletype = (e) => (dispatch) => {
  const { target } = e;
  request.sendPost('admin/addvehicletype', target)
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDVEHICLETYPE' });
    });
};

const getvehicletype = () => (dispatch) => {
  request.get('admin/getvehicletype').then((res) => {
    dispatch({ type: 'GETVEHICLETYPE', payload: res.data });
  });
};

const deletevehicletype = (id) => (dispatch) => {
  request.sendPost('admin/deletevehicletype', { id })
    .then(() => {
      dispatch({ type: 'ADDVEHICLETYPE' });
    });
};

const editvehicletype = (e, id) => (dispatch) => {
  const { target } = e;
  const formData = new FormData(target);
  request.sendPost('admin/editvehicletype', { ...Object.fromEntries(formData), id })
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDVEHICLETYPE' });
    });
};

const addvehicle = (e) => (dispatch) => {
  const { target } = e;
  request.sendPost('admin/addvehicle', target)
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDVEHICLE' });
    });
};


const getvehicle = () => (dispatch) => {
  request.get('admin/getvehicle')
    .then((res) => {
      dispatch({ type: 'GETVEHICLE', payload: res.data });
    });
};

const deletevehicle = (id) => (dispatch) => {
  request.sendPost('admin/deletevehicle', { id })
    .then(() => {
      dispatch({ type: 'ADDVEHICLE' });
    });
};

const editvehicle = (e, id) => (dispatch) => {
  const { target } = e;
  const formData = new FormData(target);
  request.sendPost('admin/editvehicle', { ...Object.fromEntries(formData), id })
    .then(() => {
      target.reset();
      $('.modal').modal('hide');
      dispatch({ type: 'ADDVEHICLE' });
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
  addvehicle,
  getvehicle,
  deletevehicle,
  editvehicle,
};
