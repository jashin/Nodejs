var events = require("events");
var net = require("net");

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

events.EventEmitter.call(this);

channel.on("join", function(id, client){
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId, message) {
//		if(id != senderId){
			this.clients[id].write(message);
//		}
	}
	this.on("broadcast", this.subscriptions[id]);
});

channel.on("leave", function(id) {
	channel.removeListener("broadcast", this.subscriptions[id]);
	console.log(this.subscriptions);
	channel.emit("broadcast", id, id + " has left the chat.\n");
});

var server = net.createServer(function (client) {
	var id = client.remoteAddress + ":" + client.remotePort;
	
//	client.on("connect", function(){
		console.log("find event connect");
		console.log(client);
		channel.emit("join", id, client);
//	});

	client.on("data", function(data) {
		data = data.toString();
		console.log(data);
		channel.emit("broadcast", id, data);
	});

	client.on("close", function() {
		channel.emit("leave", id);
	});
});

server.listen(8888);
