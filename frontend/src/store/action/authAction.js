const register = (e) => async (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'REGISTER' });
  }, 1000);
};

const increment = () => ({
  type: 'INCREMENT',
});


export default {
  register, increment,
};
