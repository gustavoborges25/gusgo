import http from 'Support/services/http.service';

class LoginService {
  static login(user) {
    return http.post('api/login', user);
  }

  static logout() {
    return http.post('api/logout');
  }
}

export default new LoginService();
