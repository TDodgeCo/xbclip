'use strict';
const axios = require('axios')
// const mongoose = require('mongoose'),
//     Task = mongoose.model('Tasks')
//
// exports.list_all_tasks = function(req, res) {
//     Task.find({}, function(err, task) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task)
//     })
// }
//
// exports.create_a_task = function(req, res) {
//     var new_task = new Task(req.body)
//     new_task.save(function(err, task) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task)
//     })
// }

exports.slack_response = function (req, res) {
  // Get the necessary responses from slack

  var dirtyText = req.body.text
  var response_url = req.body.response_url

  var text = dirtyText.replace(' ', '%20')

  res.json(200, {
    'response_type': 'in_channel',
    'text': 'Serving up the latest clip from ' +  text
  })

  axios({
    method: 'get',
    url: 'https://xboxapi.com/v2/xuid/' + text,
    headers: {
      'X-AUTH': 'add522101813917edaeae46c737bbddc81cd2bc9'
    }
  }).then(function(response) {
    var xuid = response.data.xuid
    console.log(response.data.xuid)

    axios({
      method: 'get',
      url: 'https://xboxapi.com/v2/' + xuid + '/game-clips',
      headers: {
        'X-AUTH': 'add522101813917edaeae46c737bbddc81cd2bc9'
      }
    }).then(function(response) {
      var clip = response.data[0].gameClipUris[0].uri

      axios.post(response_url, {
        response_type: 'in_channel',
        text: 'Here is the clip! - ' + clip
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
