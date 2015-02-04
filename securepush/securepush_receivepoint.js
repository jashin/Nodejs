var http = require("http");

var server = http.createServer(function(req, res){
	req.setEncoding('utf-8');
	req.on('data', function(chunk){
		console.log(chunk);
	});
	req.on('end', function(){
		console.log('end');
		res.end();
	})
});

server.listen(8081);