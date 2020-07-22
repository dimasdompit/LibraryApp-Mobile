import axios from 'axios';
import {REACT_API_URL} from '@env';

export const getAllBooks = (token, search, sortBy, sortType, page) => {
  return {
    type: 'GETALLBOOKS',
    payload: axios({
      method: 'GET',
      url: `${REACT_API_URL}/books/`,
      params: {
        search: search,
        sortBy: sortBy || 'created_at',
        sortType: sortType || 'DESC',
        page: page || 1,
      },
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
      url: `${REACT_API_URL}/books/${id}`,
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
      url: `${REACT_API_URL}/books/borrow/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const returnBooks = (token, id) => {
  return {
    type: 'RETURNBOOKS',
    payload: axios({
      method: 'PUT',
      url: `${REACT_API_URL}/books/return/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
