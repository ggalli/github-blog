import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://github-blog.free.beeceptor.com',
  baseURL: 'https://api.github.com/',
})
