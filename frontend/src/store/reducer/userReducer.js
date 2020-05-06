const initialState = {
  user: {},
  searchRes: [],
  booking: [],
  userUpdate: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERUPDATE':
      return {
        ...state,
        userUpdate: !state.userUpdate,
      };
    case 'GETUSER':
      return {
        ...state,
        user: { ...action.payload },
      };
    case 'SEARCHRES':
      return {
        ...state,
        searchRes: action.payload,
      };
    case 'GETBOOKING':
      return {
        ...state,
        booking: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
