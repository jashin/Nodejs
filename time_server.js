var net = require("net")
var strftime = require('strftime')

var date = new Date();

//var strDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();

var strDate = strftime("%Y-%m-%d %H:%M\n", new Date())

var server = net.createServer(function (socket){
	socket.end(strDate);
});
server.listen(process.argv[2]);

// var net = require('net')
    
//     function zeroFill(i) {
//       return (i < 10 ? '0' : '') + i
//     }
    
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes())
//     }
    
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
    
//     server.listen(Number(process.argv[2]))
