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
    'text': 'On it, ' +  dirtyText + '.  Your latest clip is coming up.'
  })

  // get the gamertag's xuid from xboxapi
  axios({
    method: 'get',
    url: 'https://xboxapi.com/v2/xuid/' + text,
    headers: {
      'X-AUTH': process.env.X_AUTH
    }
  }).then(function (response) {
    var xuid = response.data.xuid

    // use the xuid to find the latest clip for that xuid
    axios({
      method: 'get',
      url: 'https://xboxapi.com/v2/' + xuid + '/game-clips',
      headers: {
        'X-AUTH': process.env.X_AUTH
      }
    }).then(function (response) {
      var clip = response.data[0].gameClipUris[0].uri
      var title = response.data[0].titleId
      console.log('title is - ' + title)

      axios({
        method: 'post',
        url: 'https://www.googleapis.com/urlshortener/v1/url?key=' + process.env.GOOG_API,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'longUrl': clip
        }
      }).then(function (response) {
        var shortUrl = response.data.id

        // shorten URL and post that video clip to slack
        axios.post(response_url, {
          response_type: 'in_channel',
          text: dirtyText + ' shared their latest clip with the channel - \n' + shortUrl + '\n This video will expire in 60 minutes.'
        }).then(function(response) {
          console.log('clip successfully sent')
        })
      })

      // Check if the game is PUBG
      // if (title === 950328474) {
      //   console.log('title is pubg - should return stats')
      //   axios({
      //     method: 'get',
      //     url: 'https://xboxapi.com/v2/' + xuid + '/game-stats/' + 950328474,
      //     headers: {
      //       'X-AUTH': process.env.X_AUTH
      //     }
      //   }).then(function (response) {
      //     var data = response.data.groups[0].statlistscollection[0].stats
      //     var matches = data[0].value
      //     var wins = data[1].value
      //     var kills = data[2].value
      //     var headshots = data[3].value
      //     var kpm = kills / matches
      //     var wpm = wins / matches
      //     var hsr = headshots / kills
      //
      //     axios.post(response_url, {
      //       response_type: 'in_channel',
      //       text: 'Looks like the clip was from PUBG - Here are some stats for ' + dirtyText + '. \n'
      //       + 'Matches Played: ' + matches + ' Chicken Dinners: ' + wins + ' Total Kills: ' + kills + ' Total Headshots: ' + headshots + '\n'
      //       + 'Kills Per Match: ' + kpm + ' Win/Match Ratio: ' + wpm + ' Headshot/Kill Ratio: ' + hsr
      //     }).then(function(response) {
      //       console.log('stats successfully sent')
      //     })
      //   })
      // }

    })
  })
  console.log('Slash Command Text: ' + text + '\n' + 'Response URL: ' + response_url)
}

exports.get_response = function (req, res) {
  res.send('get received')
}
