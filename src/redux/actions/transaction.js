import axios from 'axios';
// import {REACT_API_URL} from '@env';
import {config} from '../../config/baseUrl';

export const getUserHistory = (token, userId) => {
  return {
    type: 'GETUSERHISTORY',
    payload: axios({
      method: 'GET',
      url: `${config.api_url}/books/history/${userId}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
