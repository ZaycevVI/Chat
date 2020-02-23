import settings from "../../settings";
import axios from "axios";

const auth = 'auth';

class Service {
  constructor() {
    this.api = settings.backendUrl;
  }

  async login(email, password) {
    return await axios
      .post(`${this.api}/user/login`, { email, password })
      .then(({ data }) => data);
  }

  async registration(name, email, password) {
    return await axios
      .post(`${this.api}/user/registration`, { email, password, name })
      .then(({ data }) => data);
  }

  async refreshToken() {
    return await axios
      .post(`${this.api}/token`, { refreshToken: Service.refreshToken })
      .then(({data}) => data);
  }

  static get user() {
    const user = localStorage.getItem(auth);
    return user && JSON.parse(user);
  } 

  static set user(value) {
    localStorage.setItem(auth, value ? JSON.stringify(value) : null);
  }

  static get accessToken() {
    return Service.user ? Service.user.accessToken : null; 
  }

  static set accessToken(value) {
    const user = Service.user;
    user.accessToken = value;
    Service.user = user;
  }

  static get refreshToken() {
    return Service.user ? Service.user.refreshToken : null; 
  }

  static set refreshToken(value) {
    const user = Service.user;
    user.refreshToken = value;
    Service.user = user;
  }

  static get expiresIn() {
    return Service.user ? Service.user.expiresIn : 0; 
  }
}

export const UserService = Service;

export default new Service();
