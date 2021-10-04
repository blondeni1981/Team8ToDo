var express = require('express');
var app = express();


app.set('view engine', 'ejs');

// index page
app.get('/', function (_req, res) {
  res.render('pages/index');
});

// nicole page
app.get('/nicole', function (_req, res) {
  res.render('pages/nicole');
});

// Sam page
app.get('/sam', function (_req, res) {
  res.render('pages/sam');
});

// Gaeul's page
app.get('/gaeul', function (_req, res) {
  res.render('pages/gaeul');
});

app.listen(8080);
console.log('Server is listening on port 8080');