'use strict';
const axios = require('axios')

exports.slack_response = function (req, res) {
  // Get the necessary responses from slack

  var dirtyText = req.body.text
  var response_url = req.body.response_url
  var text = dirtyText.replace(' ', '%20')

  // tell slack that we've received the response, allowing us to send delayed responses
  res.json(200, {
    'response_type': 'in_channel',
    'text': 'Serving up the latest clip from ' +  dirtyText
  })

  // get the gamertag's xuid from xboxapi
  axios({
    method: 'get',
    url: 'https://xboxapi.com/v2/xuid/' + text,
    headers: {
      'X-AUTH': process.env.X-AUTH
    }
  }).then(function(response) {
    var xuid = response.data.xuid
    console.log(response.data.xuid)

    // use the xuid to find the latest clip for that xuid
    axios({
      method: 'get',
      url: 'https://xboxapi.com/v2/' + xuid + '/game-clips',
      headers: {
        'X-AUTH': process.env.X-AUTH
      }
    }).then(function(response) {
      var clip = response.data[0].gameClipUris[0].uri

      // post that video clip to slack
      axios.post(response_url, {
        response_type: 'in_channel',
        text: 'Here is the clip! - ' + clip + '\n This video will expire in 60 minutes.'
      }).then(function(response) {
        console.log(clip + ' successfully sent')
      })
    })
  })
  console.log('Slash Command Text: ' + text + '\n' + 'Response URL: ' + response_url)
}

exports.get_response = function (req, res) {
  res.send('get received')
}
