var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var moment = require('moment');

var api = require('./api-raw.js');
var converse = require('./api-converse.js');
var assistant = require('./assistant.js');

require('promise/lib/rejection-tracking').enable(
  { allRejections: true }
);

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/status', function(req, res) {
  res.sendStatus(200);
});

// TODO log the raw API user, and request/response
app.get('/api/raw/last-night-on', function(req, res) {
  const queryDate = req.query.queryDate ? moment(req.query.queryDate) : moment();

  api.isLastNightOn(queryDate).then(
    // success
    (result) => {
      res.status(200)
         .header('content-type', 'application/json')
         .send(result);
    },
    // error
    (error) => {
      res.status(500).send(error);
    }
  );
});

// TODO log the raw API user, and request/response
app.get('/api/converse/last-night-on', function(req, res) {
  const queryDate = req.query.queryDate ? moment(req.query.queryDate) : moment();

  converse.isLastNightOn(queryDate).then(
    // success
    (result) => {
      res.status(200)
         .header('content-type', 'application/json')
         .send(result);
    },
    // error
    (error) => {
      res.status(500).send(error);
    }
  );
});

app.use('/assistant', assistant.build());

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
