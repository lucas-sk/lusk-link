import axios from 'axios';

export const key = 'e645a9ac5858742ad48fd69211f9c2ebf122e1ae';
const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})


export default api;

// minha chave: e645a9ac5858742ad48fd69211f9c2ebf122e1ae
