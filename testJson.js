const axios = require('axios')

var arr = {
  "groups": [{
    "name": "Hero",
    "titleid": 950328474,
    "statlistscollection": [{
      "arrangebyfield": "xuid",
      "arrangebyfieldid": 2533274829573698,
      "stats": [{
          "groupproperties": {
            "Ordinal": 1,
            "SortOrder": "Descending",
            "DisplayName": "Total matches played",
            "DisplayFormat": "Integer"
          },
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-played",
          "type": "Integer",
          "value": 443,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-wins",
          "type": "Integer",
          "value": 18,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-kills",
          "type": "Integer",
          "value": 399,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-total-headshots",
          "type": "Integer",
          "value": 47,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-solo-played",
          "type": "Integer",
          "value": 103,
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
          "xuid": 2533274829573698,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-squad-wins",
          "type": "Integer",
          "value": 14,
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
          "xuid": 2533274829573698,
          "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
          "name": "Stat-duo-wins",
          "type": "Integer",
          "value": 4,
          "properties": {
            "DisplayName": "Wins in duo"
          }
        }
      ]
    }]
  }],
  "statlistscollection": [{
    "arrangebyfield": "xuid",
    "arrangebyfieldid": 2533274829573698,
    "stats": [{
      "groupproperties": [],
      "xuid": 2533274829573698,
      "scid": "3b040100-2400-45a2-a30c-d45238a4dc9a",
      "titleid": 950328474,
      "name": "MinutesPlayed",
      "type": "Integer",
      "value": 13534,
      "properties": []
    }]
  }]
}

var matches = arr.groups[0].statlistscollection[0].stats[0].value
var wins = arr.groups[0].statlistscollection[0].stats[1].value
var kills = arr.groups[0].statlistscollection[0].stats[2].value
var headshots = arr.groups[0].statlistscollection[0].stats[3].value

var kpm = kills / matches
var wpm = wins / matches
var hsr = headshots / kills

console.log('matches played - ' + matches)
console.log('chicken dinners - ' + wins)
console.log('total kills - ' + kills)
console.log('total headshots - ' + headshots)
console.log('kpm = ' + kpm)
console.log('wpm = ' + wpm)
console.log('hsr = ' + hsr)
