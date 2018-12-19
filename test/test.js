const rajaongkir = require('../index');

const apiKey = '4780f9b6cfc7a916241717535916ffc4';

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
});
