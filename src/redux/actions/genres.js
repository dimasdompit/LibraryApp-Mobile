import axios from 'axios';
import {REACT_API_URL} from '@env';

export const getGenre = (token) => {
  return {
    type: 'GETALLGENRE',
    payload: axios({
      method: 'GET',
      url: `${REACT_API_URL}/genre`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
