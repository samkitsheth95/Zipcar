const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERUPDATE':
      return {
        ...state,
        user: {}
      };
    case 'USER':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
