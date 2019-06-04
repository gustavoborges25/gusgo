import http from '@/support/http/http';

const tokenKey = 'token';
const tokenUser = 'user';

function login(user) {
  return new Promise((resolve, reject) => {
    http
      .post('/auth', user)
      .then((success) => {
        const { data } = success;
        saveToken(data, user);

        resolve(success);
      }, (error) => {
        reject(error);
      });
  });
}

// function changePassword(data) {
//   return http.patch('/change-password', data)
// }

function saveToken(payload, user) {
  localStorage.setItem(tokenKey, payload.token);
  localStorage.setItem(tokenUser, JSON.stringify(user.email));
  return;
}

function getToken() {
  return localStorage.getItem(tokenKey);
}

export {
  login,
  getToken,
};
