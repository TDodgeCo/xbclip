'use strict';

const axios = require('axios')

const google = 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyC7O9Aw5VHZ67IYyWMW9D9_uzw7q3MXAbQ'

exports.shorten = function(url) {
  axios({
    method: 'post',
    url: google,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      'longUrl': url
    }
  }).then(function (response) {
    console.log(response.data)
  })
}
