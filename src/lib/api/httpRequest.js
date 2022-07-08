import axios from 'axios';

export class HttpRequest {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080',
    });
  }

  async get(url) {
    const response = await this.axios.get(url);
    return response;
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
