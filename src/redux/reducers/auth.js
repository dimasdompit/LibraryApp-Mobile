const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  errorMsg: '',
  data: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      };

    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
        errorMsg: 'Data Rejected!',
      };

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default auth;
