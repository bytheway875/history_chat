var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var _ = require('underscore');

var server = require('http').Server(app);
var io = require('socket.io')(server);
var nodes = {};
var usernames = {};




app.set('view engine', 'ejs');
app.set('title', 'History Chat')
app.set('view options', { layout: false });
//app.use(express.methodOverride());
//app.use(express.bodyParser());
//app.use(app.router);

app.use(express.static('public'));

app.get('/', function (req, res) {
    //res.render('index');
});

server.listen(1137, function(){
    console.log('Server running on port 1137');
});

io.on('connection', function(socket){
    console.log("A user connected.")
    socket.on('disconnect', function(){
        console.log('A user disconnected.')
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    })
});

// BASIC NODE HELLO WORLD
//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

