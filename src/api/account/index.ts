import axios from '@api/axios';

export const apiAccountInfo = () => {
  return axios.get('/account');
};
