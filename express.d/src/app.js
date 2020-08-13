'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');



// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(morgan('combined'))
// app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/welcome.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
