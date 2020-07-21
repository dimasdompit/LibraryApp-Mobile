import axios from 'axios';
import {API_URL} from '@env';

export const getAllBooks = (token, queryParams) => {
  return {
    type: 'GETALLBOOKS',
    payload: axios({
      method: 'GET',
      url: `${API_URL}/books/?${queryParams}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getBookDetails = (token, id) => {
  return {
    type: 'GETBOOKDETAILS',
    payload: axios({
      method: 'GET',
      url: `${API_URL}/books/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const borrowBooks = (token, id, data) => {
  return {
    type: 'BORROWBOOKS',
    payload: axios({
      method: 'PUT',
      url: `${API_URL}/books/borrow/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
