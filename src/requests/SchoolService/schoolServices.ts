import axios from 'axios';

export default axios.create({
  baseURL: 'https://cod3red.somee.com/',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});
