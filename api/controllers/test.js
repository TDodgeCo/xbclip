const url = require('./linkShorteningController')

var clip = url.shorten('https://bdo.com')

console.log(clip.id);
