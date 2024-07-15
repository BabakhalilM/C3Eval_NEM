import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2300/api',  
  // baseURL: 'https://c3eval-nem-1.onrender.com/api',
});


export default instance;
