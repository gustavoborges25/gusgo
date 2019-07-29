import AdressService from 'Support/services/adress.service';

class Address {
  static getCities(state) {
    return new Promise((resolve, reject) => {
      AdressService
        .getCities(state)
        .then(({ data }) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  static getStates() {
    return new Promise((resolve, reject) => {
      AdressService
        .getStates()
        .then(({ data }) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }
}

export default new Address();
