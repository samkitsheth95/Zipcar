const initialState = {
  location: [],
  vehicletype: [],
  vehicle: [],
  member: [],
  locationUpdate: false,
  vehicletypeUpdate: false,
  vehicleUpdate: false,
  memberUpdate: false,
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
    case 'ADDVEHICLE':
      return {
        ...state,
        vehicleUpdate: !state.vehicleUpdate,
      };
    case 'GETVEHICLE':
      return {
        ...state,
        vehicle: action.payload,
      };
    case 'GETMEMBER':
      return {
        ...state,
        member: action.payload,
      };
    case 'EDITMEMBER':
      return {
        ...state,
        memberUpdate: !state.memberUpdate,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
