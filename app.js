var express = require('express');
var app = express();


app.set('view engine', 'ejs');



// index page
app.get('/', function(_req, res) {
  res.render('pages/index');
});

// nicole page
app.get('/nicole', function(_req, res) {
  res.render('pages/nicole');
});

app.listen(8080);
console.log('Server is listening on port 8080');