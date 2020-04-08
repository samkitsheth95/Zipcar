import axios from 'axios';

const config = {
  headers: {
    'content-type': 'multipart/form-data',
  },
};
axios.defaults.withCredentials = true;

function sendPost(route, data = null) {
  let formData = null;
  if (data) {
    if (data instanceof HTMLFormElement) formData = new FormData(data);
    else {
      formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }
  }
  return axios.post(process.env.REACT_APP_SERVER_ROOT + route, formData, config);
}

function get(route) {
  return axios.get(process.env.REACT_APP_SERVER_ROOT + route, config);
}

export default {
  sendPost, get,
};
