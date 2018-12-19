# rajaongkir-pro-connect
NodeJS Client untuk menyambungkan API RajaOngkir PRO

# Requirements
*  rajaongkir-pro-connect memerlukan NodeJs 8.X atau yang lebih tinggi

# Instalasi
```
npm i rajaongkir-pro-connect
```

# Penggunaan
### Get province
Method "getProvince" digunakan untuk mendapatkan daftar propinsi yang ada di Indonesia.
```javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getProvince(apiKey, provinceId)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| provinceId `OPTIONAL` | Jika kamu hanya ingin mendapatkan data satu provinsi saja, maka isi dengan id provinsi. Kamu dapat mengosongkan provinceId |

### Get city
Method "getCity" digunakan untuk mendapatkan daftar kota/kabupaten yang ada di Indonesia.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getCity(apiKey, cityId, provinceId)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| cityId `OPTIONAL` | Jika kamu hanya ingin mendapatkan data satu kota saja, maka isi dengan id kota atau kabupaten. Kamu dapat mengosongkan cityId |
| provinceId | Isi dengan id provinsi |

### Get Subdistrict
Method "getSubdistrict" digunakan untuk mendapatkan daftar kecamatan yang ada di Indonesia.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getSubdistrict(apiKey, cityId)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| cityId | Isi dengan id kota atau kabupaten |

### Get cost
Method "getCost" digunakan untuk mengetahui tarif pengiriman (ongkos kirim) dari dan ke kecamatan tujuan tertentu dengan berat tertentu pula.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getCost(apiKey, json)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
#### JSON Data
| Field | Deskripsi |
|--|--|
| origin | <integer> Id kota/kabupaten atau kecamatan pengirim |
| originType | <string> Jika origin adalah id kota maka isi dengan 'city' dan jika origin diisi dengan id kecamatan maka isi dengan 'subdistrict'|
| destination | <integer>  Id kota/kabupaten atau kecamatan tujuan |
| destinationType | <string> Jika destination adalah id kota maka isi dengan 'city' dan jika destination diisi dengan id kecamatan maka isi dengan 'subdistrict' |
| weight | <integer> Isi berat barang dengan satuan gram |
| courier | <string> Kode kurir: jne, pos, tiki, rpx, esl, pcp, pandu, wahana, sicepat, jnt, pahala, cahaya, sap, jet, indah, dse, slis, first, ncs, star, ninja, lion, idl |

| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| json | Isi dengan format json, dengan struktur seperti json data di atas |

### Get international origin
Method "getInternationalOrigin" digunakan untuk mendapatkan daftar/nama kota yang mendukung pengiriman internasional.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getInternationalOrigin(apiKey, cityId, provinceId)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| cityId `OPTIONAL` | Jika kamu hanya ingin mendapatkan data satu kota saja, maka isi dengan id kota atau kabupaten. Kamu dapat mengosongkan cityId jika ingin mendapatkan keseluruhan kota yang menerima pengiriman internasional |
| provinceId `OPTIONAL` | Jika kamu hanya ingin mendapatkan data satu kota saja, maka isi dengan id kota atau kabupaten. Kamu dapat mengosongkan provinceId jika ingin mendapatkan keseluruhan kota yang menerima pengiriman internasional |

### Get international destination
Method "getInternationalDestination" digunakan untuk mendapatkan daftar/nama negara tujuan pengiriman internasional.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getInternationalDestination(apiKey, countryId)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| countryId `OPTIONAL` | Isi dengan id negara jika ingin mendapatkan detil dari negara tujuan. Kamu dapat mengosongkan countryId jika kamu ingin mendapatkan semua negara yang dapat menerima pengiriman barang |

### Get international cost
Method "getInternationalCost" digunakan untuk mengetahui tarif pengiriman (ongkos kirim) internasional dari kota-kota di Indonesia ke negara tujuan di seluruh dunia.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getInternationalCost(apiKey, json)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
#### JSON Data
| Field | Deskripsi |
|--|--|
| origin | <integer> Id kota/kabupaten atau kecamatan pengirim |
| destination | <integer> Id negara penerima |
| weight | <integer> Isi berat barang dengan satuan gram |
| courier | <string> Kode kurir: pos, tiki, jne, slis, expedito. |

| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| json | Isi dengan format json, dengan struktur seperti json data di atas |

### Get waybill
Method "getWaybill" untuk digunakan melacak/mengetahui status pengiriman berdasarkan nomor resi.
```Javascript
const rajaongkir = require('rajaongkir-pro-connect');
rajaongkir.getWaybill(apiKey, json)
  .then((results) => {
    res.json(results);
  })
  .catch((err) => {
    res.json(err);
  })
```
#### JSON Data
| Field | Deskripsi |
|--|--|
| waybill | <string> Nomor resi |
| courier | <string> Kode kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl |

| Parameter | Deskripsi  |
|--|--|
| apiKey | Pro api key yang kamu dapatkan dari Rajaongkir  |
| json | Isi dengan format json, dengan struktur seperti json data di atas |
