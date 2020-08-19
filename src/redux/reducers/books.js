const initialState = {
  isLoading: false,
  isError: false,
  // isLoggedIn: false,
  errorMsg: '',
  data: {
    totalBooks: 0,
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

    /* POST BOOK */
    case 'POSTBOOK_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'POSTBOOK_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected!',
      };
    case 'POSTBOOK_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
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

    // Return Books
    case 'RETURNBOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case 'RETURNBOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected!',
      };

    case 'RETURNBOOKS_FULFILLED':
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
