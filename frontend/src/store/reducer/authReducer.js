const initialState = {
  loggedIn: false,
  loginError: false,
  registerError: false,
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        loginError: false,
        registerError: false,
      };
    case 'REGISTER':
      return {
        ...state,
        loginError: false,
        registerError: false,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        registerError: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    case 'ISADMIN':
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
