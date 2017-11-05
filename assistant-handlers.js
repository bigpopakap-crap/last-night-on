const Promise = require('promise');
const converse = require('./api-converse.js');

function welcome(delegate) {
  return new Promise.resolve('Hello there!');
}

function isItOn(delegate) {
  return converse.isLastNightOn(queryDate).then(
    result => Promise.resolve(result.converse.fullText),
    error => Promise.resolve(error.converse.fullText)
  );
}

function goodbye(delegate, isCancel) {
  return new Promise.resolve('Goodbye!');
}

function fallback(delegate) {
  return new Promise.resolve('I\'m sory, I didn\'t understand');
}

module.exports = {
  welcome,
  isItOn,
  goodbye,
  fallback
};
