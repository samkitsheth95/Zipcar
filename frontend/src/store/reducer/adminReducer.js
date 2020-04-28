const initialState = {
  location: [],
  vehicletype: [],
  locationUpdate: false,
  vehicletypeUpdate: false,
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
    case 'ADDVEHICLETYPE':
      return {
        ...state,
        vehicletypeUpdate: !state.vehicletypeUpdate,
      };
    case 'GETVEHICLETYPE':
      return {
        ...state,
        vehicletype: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
