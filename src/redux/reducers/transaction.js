const initialState = {
  isLoading: false,
  isError: false,
  // isLoggedIn: false,
  errorMsg: '',
  data: {},
};

const books = (state = initialState, action) => {
  switch (action.type) {
    // Borrow Books
    case 'GETUSERHISTORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case 'GETUSERHISTORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected!',
      };

    case 'GETUSERHISTORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default books;
