const initialState = {
  isLoading: false,
  isError: false,
  // isLoggedIn: false,
  errorMsg: '',
  data: {
    'COUNT(*)': 0,
    result: [],
  },
};

const books = (state = initialState, action) => {
  switch (action.type) {
    // Get All Books
    case 'GETALLBOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        // isLoggedIn: false,
      };
    case 'GETLALLBOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        // isLoggedIn: false,
        errorMsg: 'Data Rejected!',
      };
    case 'GETALLBOOKS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        // isLoggedIn: true,
        data: action.payload.data.data,
      };

    // Get Book Details
    case 'GETBOOKDETAILS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        // isLoggedIn: false,
      };

    case 'GETBOOKDETAILS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        // isLoggedIn: false,
        errorMsg: 'Data Rejected!',
      };

    case 'GETBOOKDETAILS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        // isLoggedIn: true,
        // data: action.payload.data.data,
      };

    // Borrow Books
    case 'BORROWBOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case 'BORROWBOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected!',
      };

    case 'BORROWBOOKS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default books;
