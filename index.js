var express = require('express');
var app = express();

var moment = require('moment');

var api = require('./api.js');

require('promise/lib/rejection-tracking').enable(
  { allRejections: true }
);

app.set('port', (process.env.PORT || 5000));

app.get('/status', function(req, res) {
  res.sendStatus(200);
});

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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});