import http from 'Support/services/http.service';

class AddressService {
  static getCities(state) {
    return http.get(`cities?state=${state}`);
  }

  static getStates() {
    return http.get('states');
  }
}

export default new AddressService();
