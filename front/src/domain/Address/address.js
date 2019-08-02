import AddressService from 'Domain/Address/address.service';

class Address {
  static getCities(state) {
    return new Promise((resolve, reject) => {
      AddressService
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
      AddressService
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
