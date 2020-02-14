import settings from "../../settings";
import axios from "axios";

class Service {
  constructor() {
    this.api = settings.api;
  }

  getDialogs() {
    return axios.get(`${this.api}/dialogs`).then(({ data }) => data);
  }

  getMessages() {
    return axios.get(`${this.api}/messages`).then(({ data }) => data);
  }
}

export default new Service();
