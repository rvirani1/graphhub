import { get } from './axiosClient'

const baseUrl = 'https://api.github.com';

export const getRepo = async ({ owner, repo }) => {
  await get(`${baseUrl}/repos/${owner}/${repo}`);
};
