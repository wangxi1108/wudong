import axios from 'axios'

const ajax = axios.create({
  baseURL: 'http://api.dev.ikolo.me/',
  timeout: 1000
});

export default ajax;
