// http://awaxman11.github.io/blog/2014/07/13/how-to-create-an-angular-app-using-yeoman-and-deploy-it-to-heroku/

var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);