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
  // Display the key/value pairs
for(var pair of formData.entries()) {
  console.log(pair[0]+ ', '+ pair[1]); 
} 
  return axios.post(process.env.REACT_APP_SERVER_ROOT + route, formData, config)
    .then((response) => response)
    .catch((error) => error);
}

function get(route) {
  return axios.get(process.env.REACT_APP_SERVER_ROOT + route, config)
    .then((response) => response)
    .catch((error) => error);
}

export default {
  sendPost, get,
};
