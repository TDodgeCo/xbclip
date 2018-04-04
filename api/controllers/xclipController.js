'use strict';
const axios = require('axios')

exports.slack_response = function (req, res) {
  // Get the necessary responses from slack

  var dirtyText = req.body.text
  var response_url = req.body.response_url
  // var text = dirtyText.replace(' ', '%20')

  // find out if there was a flag on the request
  var textArr = dirtyText.split('')
  var len = textArr.length
  var vidIndex,
      gTag,
      responseMessage

  if (textArr[len -2] === '-') {
    vidIndex = textArr[len - 1] - 1
    for (let i = 3; i > 0; i--) {
      textArr.pop()
    }
    gTag = textArr.join('').replace(' ', '%20')
    responseMessage = ' Clip #' + (vidIndex + 1) + ' from your collection is coming up.';
    console.log('gTag is ' + gTag + ' vidIndex is ' + vidIndex)
  }
  else {
    gTag = dirtyText.replace(' ', '%20')
    vidIndex = 0
    responseMessage = ' Your latest clip is coming up.'
  }
  var gamertag = gTag.replace('%20', ' ')

  // tell slack that we've received the response, allowing us to send delayed responses
  res.json(200, {
    'response_type': 'in_channel',
    'text': 'On it, ' +  gamertag + '.' + responseMessage
  })

  // get the gamertag's xuid from xboxapi
  axios({
    method: 'get',
    url: 'https://xboxapi.com/v2/xuid/' + gTag,
    headers: {
      'X-AUTH': process.env.X_AUTH
    }
  }).then( response =>  {
    var xuid = response.data.xuid
    console.log(xuid)
    // use the xuid to find the latest clip for that xuid
    axios({
      method: 'get',
      url: 'https://xboxapi.com/v2/' + xuid + '/game-clips',
      headers: {
        'X-AUTH': process.env.X_AUTH
      }
    }).then( response =>  {
      var clip = response.data[vidIndex].gameClipUris[0].uri
      console.log(clip)
      axios({
        method: 'post',
        url: 'https://www.googleapis.com/urlshortener/v1/url?key=' + process.env.GOOG_API,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'longUrl': clip
        }
      }).then( response =>  {
        var shortUrl = response.data.id

        // shorten URL and post that video clip to slack
        axios.post(response_url, {
          response_type: 'in_channel',
          text: gamertag + shortUrl + '\n This video will expire in 60 minutes.'
        }).then(function(response) {
          console.log('clip successfully sent')
        })
      })
    })
  })
  console.log('Slash Command Text: ' + gamertag + '\n' + 'Response URL: ' + response_url)
}

exports.get_response = function (req, res) {
  res.send('get received')
}
