
var path = require('path');

var functionPath = '/lambda/function';

var handlerFile = process.argv[2] || 'index.js';
var payloadFile = process.argv[3] || 'test.json';

var handler = require(path.join(functionPath, handlerFile));
var payload = require(path.join(functionPath, payloadFile));

var printSuccess = function(results) {
  console.log('SUCCESS', results);
}

var printError = function(err) {
  console.log('ERROR', err);
}

var context = {
  done: function(err, results) {
    if (err) {
      return printError(err);
    }
    printSuccess(results);
  },
  succeed: function(results) {
    printSuccess(results);
  },
  fail: function(err) {
    printError(err);
  }
};

handler.handler(payload, context);


