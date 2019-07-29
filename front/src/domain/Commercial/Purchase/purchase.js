import PurchaseService from 'Domain/Commercial/Purchase/purchase.service';

class Purchase {
  static build(
    {
      id = '',
      number = '',
      provider = '',
      products = [],
      createdAt = '',
      deliveryDate = '',
    },
  ) {
    return {
      id,
      number,
      provider,
      products,
      createdAt,
      deliveryDate,
    };
  }

  constructor(payload = {}) {
    Object.assign(this, { ...Purchase.build(payload) });
  }

  static list(params) {
    return new Promise((resolve, reject) => {
      PurchaseService
        .list(params)
        .then(({ data }) => {
          const list = [];
          Object.assign(list, { ...data });
          list.data = data.data.map(item => this.newPurchase(item));
          resolve(list);
        }, (error) => {
          reject(error);
        });
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      PurchaseService
        .get(id)
        .then(({ data }) => {
          const purchase = {};
          Object.assign(Purchase, this.newPurchase(data));
          resolve(purchase);
        }, (error) => {
          reject(error);
        });
    });
  }

  static newPurchase(payload) {
    return new Purchase(payload);
  }
}

export default Purchase;
