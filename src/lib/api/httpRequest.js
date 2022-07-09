import axios from 'axios';
import { BASE_URL } from 'constants';

export class HttpRequest {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get(url) {
    const response = await this.axios.get(url);
    return response;
  }

  async getWithParams({ url = '', config = {}, callback }) {
    const response = await this.axios.get(url, { params: config });
    callback(response);
  }

  async post(url, data) {
    const response = await this.axios.post(url, data);
    return response;
  }

  async delete(url) {
    const response = await this.axios.delete(url);
    return response;
  }

  async patch(url, data) {
    const response = await this.axios.patch(url, data);
    return response;
  }
}
