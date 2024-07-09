import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2300/', 
});


export default instance;
