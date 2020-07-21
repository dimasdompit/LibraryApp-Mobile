import axios from 'axios';
import {API_URL} from '@env';

export const getUserHistory = (token, userId) => {
  return {
    type: 'GETUSERHISTORY',
    payload: axios({
      method: 'GET',
      url: `${API_URL}books/history/${userId}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
