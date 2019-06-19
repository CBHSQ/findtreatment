import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9011/locator/',
  responseType: 'json'
});
