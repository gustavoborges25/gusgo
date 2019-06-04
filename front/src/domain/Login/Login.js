import LoginService from 'Support/services/login.service';

const token = 'token';

class Login {
  static login(user) {
    return new Promise((resolve, reject) => {
      LoginService
        .login(user)
        .then((success) => {
          const { data } = success;
          this.saveToken(data);
          resolve(success);
        }, (error) => {
          reject(error);
        });
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      LoginService
        .logout()
        .then((success) => {
          resolve(success);
        }, (error) => {
          reject(error);
        });
    });
  }

  static saveToken(payload) {
    return localStorage.setItem(token, payload.token);
  }

  static getToken() {
    return localStorage.getItem(token);
  }
}

export default new Login();
