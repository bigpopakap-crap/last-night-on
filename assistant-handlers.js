const Promise = require('promise');
const moment = require('moment');

const converse = require('./api-converse.js');

function welcome(delegate) {
  return new Promise(resolve => {
    delegate.tell('Hello there!');
    resolve();
  });
}

// TODO allow asking about next week
function isItOn(delegate) {
  const queryDate = moment();

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
