const unirest = require('unirest');

exports.getProvince = (apiKey, provinceId = null) => {
  return new Promise((resolve, reject) => {
    if (provinceId === null) {
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
    } else {
      unirest
        .get(`https://pro.rajaongkir.com/api/province?id=${provinceId}`)
        .headers({ key: apiKey })
        .timeout(30000)
        .end((response) => {
          if (response.statusCode !== 200) {
            reject(response.body);
          }

          resolve(response.body.rajaongkir.results);
        });
    }
  });
};

exports.getCity = (apiKey, cityId = null, provinceId) => {
  return new Promise((resolve, reject) => {
    if (cityId === null) {
      unirest
        .get(`https://pro.rajaongkir.com/api/city?province=${provinceId}`)
        .headers({ key: apiKey })
        .timeout(30000)
        .end((response) => {
          if (response.statusCode !== 200) {
            reject(response.body);
          }

          resolve(response.body.rajaongkir.results);
        });
    } else {
      unirest
        .get(`https://pro.rajaongkir.com/api/city?id=${cityId}&province=${provinceId}`)
        .headers({ key: apiKey })
        .timeout(30000)
        .end((response) => {
          if (response.statusCode !== 200) {
            reject(response.body);
          }

          resolve(response.body.rajaongkir.results);
        });
    }
  });
};
