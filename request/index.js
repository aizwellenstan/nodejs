const request = require('request');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var options = {
  uri: "http://127.0.0.1:3000/A/B/C/historicaldata",
  headers: {
    "Content-type": "application/json",
  },
  json: {
    "ObjectId": '',
    "Value": ''
  }
};

var ddos = function(ObjectId, min, max) {
  options.json.ObjectId = ObjectId
  options.json.Value = randomIntFromInterval(min, max)
  request.post(options, function(error, response, body){})
  console.log('post ' + options.uri + ' ' + options.json.ObjectId + ' ' + options.json.Value)
}

setInterval(function(){ddos('4bdc2e8a-ce5c-4a84-b0a8-8efe4d74e0ef', 0, 100)}, 5000)
