import axios from 'axios';
import {API_URL} from '@env';

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: `${API_URL}/auth/login`,
      data: {
        username: data.username,
        password: data.password,
      },
    }),
  };
};
