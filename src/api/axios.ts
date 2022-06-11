import {navigate} from '@helper/RootNavigation';
import axios from 'axios';

const public_url = 'server_url';

const API_URL = public_url;

let instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(async request => {
  return request;
});

instance.interceptors.response.use(
  response => {
    return response;
  },

  async error => {
    //error 시 로직 처리
    const errorAPI = error.config;
    //error navigate 함수로 이동할 screen 정의
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  // refresh_token 로직
};

export default instance;
