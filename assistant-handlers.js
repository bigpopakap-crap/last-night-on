const Promise = require('promise');
const moment = require('moment');
const ResponseBuilder = require('./mrkapil').ResponseBuilder;
const converse = require('./api-converse.js');

function welcome(inputData) {
  return Promise.resolve(
    new ResponseBuilder()
      .text('Hello there!')
      .build()
  );
}

// TODO allow asking about next week
function isItOn(inputData) {
  const queryDate = moment();

  return converse.isLastNightOn(queryDate).then(
    result => Promise.resolve(result.converse.fullText),
    error => Promise.resolve(error.converse.fullText)
  ).then(text => Promise.resolve(
    new ResponseBuilder()
      .text(text)
      .build()
  ));
}

function goodbye(inputData, isCancel) {
  return Promise.resolve(
    new ResponseBuilder()
      .text('Goodbye!')
      .build()
  );
}

function fallback(inputData) {
  return Promise.resolve(
    new ResponseBuilder()
      .text('I\'m sory, I didn\'t understand')
      .build()
  );
}

module.exports = {
  welcome,
  isItOn,
  goodbye,
  fallback
};
