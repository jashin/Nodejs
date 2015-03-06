var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use(express.logger('dev'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.all('/receive', function(req, res){
	//console.log("receive " + req.get('Authorization'));
	//var basicAuth = req.get('Authorization');
	io.emit('chat message',  req.get('Authorization') + '\n' + req.body);
	res.status(200).send("ok");
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(process.argv[2], function(){
  console.log('listening on *:' + process.argv[2]);
});
