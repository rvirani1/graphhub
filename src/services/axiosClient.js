import axios from 'axios';
import { username, token } from '../config/secrets';

export const get = async (url, opts = {}) => {
  await axios.get(url, {
    auth: { username: username, password: token },
    ...opts
  });
};
