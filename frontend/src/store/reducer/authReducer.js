const initialState = {
  loggedIn: false,
  loginError: 'tim',
  registerError: false,
  isCompany: true,
  is_company: null,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        loginError: false,
        registerError: false,
        is_company: action.is_company,
      };
    case 'REGISTER':
      return {
        ...state,
        loginError: 'cook',
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
    case 'COMPANY_TOGGLE':
      return {
        ...state,
        isCompany: !state.isCompany,
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    case 'INCREMENT':
      return {
        ...state,
        loginError: 'cook',
        counter: state.counter + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
