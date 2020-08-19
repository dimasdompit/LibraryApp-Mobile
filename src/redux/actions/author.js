import axios from 'axios';
// import {REACT_API_URL} from '@env';
import {config} from '../../config/baseUrl';

export const getAuthor = (token) => {
  return {
    type: 'GETALLAUTHOR',
    payload: axios({
      method: 'GET',
      url: `${config.api_url}/author`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
