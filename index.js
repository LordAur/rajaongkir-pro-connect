const unirest = require('unirest');

exports.getProvince = (apiKey) => {
  return new Promise((resolve, reject) => {
    unirest
      .get('https://pro.rajaongkir.com/api/province')
      .headers({ key: apiKey })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body.rajaongkir.results);
      });
  });
};
