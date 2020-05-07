const initialState = {
  user: {},
  searchRes: [],
  booking: [],
  bookingUpdate: false,
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
    case 'SEARCHCLEAR':
      return {
        ...state,
        searchRes: [],
      };
    case 'GETBOOKING':
      return {
        ...state,
        booking: action.payload,
      };
    case 'UPDATEBOOKING':
      return {
        ...state,
        bookingUpdate: !state.bookingUpdate,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
