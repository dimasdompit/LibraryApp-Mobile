import axios from 'axios';
// import {REACT_API_URL} from '@env';
import {config} from '../../config/baseUrl';

export const getGenre = (token) => {
  return {
    type: 'GETALLGENRE',
    payload: axios({
      method: 'GET',
      url: `${config.api_url}/genre`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
