const initialState = {
  location: [],
  locationUpdate: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDLOCATION':
      return {
        ...state,
        locationUpdate: !state.locationUpdate,
      };
    case 'GETLOCATIONS':
      return {
        ...state,
        location: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
