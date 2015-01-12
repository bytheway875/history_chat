var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(request, response) {
    response.send('Hello world')
});
var _ = require('underscore');

var server = require('http').createServer(app);
var sockets = require('socket.io');
var nodes = {};
var usernames = {};

server.listen(process.env.PORT || 3000);


app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

// BASIC NODE HELLO WORLD
//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

