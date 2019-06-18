import axios from 'axios';

export default axios.create({
  baseURL: 'https://bhsis01.eagletechva.com/locator/',
  responseType: 'json'
});
