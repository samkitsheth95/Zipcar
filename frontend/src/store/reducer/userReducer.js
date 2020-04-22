const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERUPDATE':
      return {
        ...state,
      };
    case 'USER':
      return {
        ...state,
        loginError: false,
        registerError: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
