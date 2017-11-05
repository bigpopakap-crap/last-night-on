const Promise = require('promise');
const converse = require('./api-converse.js');

function welcome(delegate) {
  return new Promise(resolve => {
    delegate.tell('Hello there!');
    resolve();
  });
}

function isItOn(delegate) {
  return converse.isLastNightOn(queryDate).then(
    result => Promise.resolve(result.converse.fullText),
    error => Promise.resolve(error.converse.fullText)
  ).then(text => {
    return new Promise(resolve => {
      delegate.tell(text);
      resolve();
    });
  });
}

function goodbye(delegate, isCancel) {
  return new Promise(resolve => {
    delegate.tell('Goodbye!');
    resolve();
  });
}

function fallback(delegate) {
  return new Promise(resolve => {
    delegate.tell('I\'m sory, I didn\'t understand');
    resolve();
  });
}

module.exports = {
  welcome,
  isItOn,
  goodbye,
  fallback
};
