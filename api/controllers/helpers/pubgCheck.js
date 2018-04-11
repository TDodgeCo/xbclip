// Check if the game is PUBG
if (title === 950328474) {
  console.log('title is pubg - should return stats')
  axios({
    method: 'get',
    url: 'https://xboxapi.com/v2/' + xuid + '/game-stats/' + 950328474,
    headers: {
      'X-AUTH': process.env.X_AUTH
    }
  }).then(function (response) {
    var data = response.data.groups[0].statlistscollection[0].stats
    var matches = data[0].value
    var wins = data[1].value
    var kills = data[2].value
    var headshots = data[3].value
    var kpm = kills / matches
    var wpm = wins / matches
    var hsr = headshots / kills

    axios.post(response_url, {
      response_type: 'in_channel',
      text: 'Looks like the clip was from PUBG - Here are some stats for ' + dirtyText + '. \n'
      + 'Matches Played: ' + matches + ' Chicken Dinners: ' + wins + ' Total Kills: ' + kills + ' Total Headshots: ' + headshots + '\n'
      + 'Kills Per Match: ' + kpm + ' Win/Match Ratio: ' + wpm + ' Headshot/Kill Ratio: ' + hsr
    }).then(function(response) {
      console.log('stats successfully sent')
    })
  })
}
