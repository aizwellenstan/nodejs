var express = require('express')
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var server = app.listen(3001, ()=>{
  console.log("app started on port 3001");
});

var io = require('socket.io').listen(server);


var kafka = require('kafka-node');


const consumer = new kafka.ConsumerGroupStream({
    kafkaHost: '192.168.1.185:9092',
    groupId: 'group1',
    fromOffset: 'latest'
}, 'test17')

var offset = new Offset(client);
var port = 3001;

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io = io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

consumer = consumer.on('message', function(message) {
    console.log(message.value);
    io.emit("message", message.value);
});

http.listen(port, function(){
    console.log("Running on port " + port)
});
