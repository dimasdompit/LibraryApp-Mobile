import axios from 'axios';
// import {REACT_API_URL} from '@env';
import {config} from '../../config/baseUrl';

export const getAllBooks = (token, search, sortBy, sortType, page) => {
  return {
    type: 'GETALLBOOKS',
    payload: axios({
      method: 'GET',
      url: `${config.api_url}/books/`,
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
      url: `${config.api_url}/books/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const addBooks = (token, data) => {
  return {
    type: 'POSTBOOK',
    payload: axios({
      method: 'POST',
      url: `${config.api_url}/books/`,
      data: data,
      headers: {
        Authorization: token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }),
  };
};

export const borrowBooks = (token, id, data) => {
  return {
    type: 'BORROWBOOKS',
    payload: axios({
      method: 'PUT',
      url: `${config.api_url}/books/borrow/${id}`,
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
      url: `${config.api_url}/books/return/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
