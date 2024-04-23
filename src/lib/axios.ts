import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://66270a86b625bf088c0730b7.mockapi.io/api',
  // baseURL: 'https://api.github.com/',
})
