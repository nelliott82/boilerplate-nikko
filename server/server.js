const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'path to public files')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
