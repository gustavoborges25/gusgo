import http from 'Support/services/http.service';

class AddressService {
  static getCities(state) {
    return http.get(`api/cities?state=${state}`);
  }

  static getStates() {
    return http.get(`api/states`);
  }
}

export default new AddressService();
