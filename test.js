const axios = require('axios')

var arr =
{
  "groups": [{
    "name": "Hero",
    "titleid": 950328474,
    "statlistscollection": [{
      "arrangebyfield": "xuid",
      "arrangebyfieldid": 2535462000518699,
      "stats": [{
          "groupproperties": {},
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-played",
          "type": "Integer",
          "value": 103,
          "properties": {
            "DisplayName": "Total matches played"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 2,
            "SortOrder": "Descending",
            "DisplayName": "Total wins",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-wins",
          "type": "Integer",
          "properties": {
            "DisplayName": "Total wins"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 3,
            "SortOrder": "Descending",
            "DisplayName": "Total kills",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-kills",
          "type": "Integer",
          "value": 65,
          "properties": {
            "DisplayName": "Total kills"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 4,
            "SortOrder": "Descending",
            "DisplayName": "Total headshots",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-headshots",
          "type": "Integer",
          "value": 9,
          "properties": {
            "DisplayName": "Total headshots"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 5,
            "SortOrder": "Descending",
            "DisplayName": "Solo matches played",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-solo-played",
          "type": "Integer",
          "value": 51,
          "properties": {
            "DisplayName": "Solo matches played"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 6,
            "SortOrder": "Descending",
            "DisplayName": "Wins in solo",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-solo-wins",
          "type": "Integer",
          "properties": {
            "DisplayName": "Wins in solo"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 7,
            "SortOrder": "Descending",
            "DisplayName": "Wins in squad",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-squad-wins",
          "type": "Integer",
          "properties": {
            "DisplayName": "Wins in squad"
          }
        },
        {
          "groupproperties": {
            "Ordinal": 8,
            "SortOrder": "Descending",
            "DisplayName": "Wins in duo",
            "DisplayFormat": "Integer"
          },
          "xuid": 2535462000518699,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-duo-wins",
          "type": "Integer",
          "properties": {
            "DisplayName": "Wins in duo"
          }
        }
      ]
    }]
  }],
  "statlistscollection": [{
    "arrangebyfield": "xuid",
    "arrangebyfieldid": 2535462000518699,
    "stats": [{
      "groupproperties": [],
      "xuid": 2535462000518699,
      "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
      "titleid": 950328474,
      "name": "MinutesPlayed",
      "type": "Integer",
      "value": 3185,
      "properties": []
    }]
  }]
}

// console.log(arr.groups[0].statlistscollection[0].stats)


axios({
  method: 'get',
  url: 'https://xboxapi.com/v2/' + 2535462000518699 + '/game-stats/' + 950328474,
  headers: {
    'X-AUTH': 'add522101813917edaeae46c737bbddc81cd2bc9'
  }
}).then(function(response) {
  var data = response.data.groups[0].statlistscollection[0].stats
  var matches = data[0].value
  var wins = data[1].value
  console.log(wins)
})
