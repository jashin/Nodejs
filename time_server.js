var net = require("net")
var strftime = require('strftime')

var date = new Date();

//var strDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();

var strDate = strftime("%Y-%m-%d %H:%M", new Date())

var server = net.createServer(function (socket){
	socket.end(strDate);
});
server.listen(process.argv[2]);