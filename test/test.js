const rajaongkir = require('../index');

const apiKey = 'your raja ongkir api key';

describe('Raja Ongkir', () => {
  it('Get province', (done) => {
    rajaongkir.getProvince(apiKey)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get city', (done) => {
    rajaongkir.getCity(apiKey, '', 5)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get subdistrict', (done) => {
    rajaongkir.getSubdistrict(apiKey, 39)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get cost', (done) => {
    const json = {
      origin: 501,
      originType: 'city',
      destination: 574,
      destinationType: 'subdistrict',
      weight: 1000,
      courier: 'jne',
    };

    rajaongkir.getCost(apiKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get international origin', (done) => {
    rajaongkir.getInternationalOrigin(apiKey)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get international destination', (done) => {
    rajaongkir.getInternationalDestination(apiKey)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get international cost', (done) => {
    const json = {
      origin: 152,
      destination: 108,
      weight: 1000,
      courier: 'pos',
    };

    rajaongkir.getInternationalCost(apiKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get waybill', (done) => {
    const json = {
      waybill: 'SOCAG00183235715',
      courier: 'jne',
    };

    rajaongkir.getWaybill(apiKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});
