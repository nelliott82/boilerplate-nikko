const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'path to public files')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('../api'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './path/to/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Hello? Anyone there?');
  console.log("That depends. Who's asking?");
  console.log(`Oh sure, sir. My name is your server number ${port}`);
});
