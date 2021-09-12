const express = require("express");
const app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var path = require('path')
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.render('home');
});
app.get('/load', function(req, res){
  res.render('loading');
});
app.get('/contact', function(req, res){
  res.render('contact_us', {qs: req.query});
});
app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact_success', {data: req.body});
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

