var fs = require('fs');

var filecontent = fs.readFile(process.argv[2],function (err,data){
	if(err) throw err;
	var file = data.toString().split("\n");
	//console.log(file.length);
	for(var i in file){
		var s = file[i];
		//console.log(s + "--------" + s.indexOf("diff --git "));
		if(s.indexOf("diff --git ") == 0) {
			console.log(i);
			fs.appendFile('out.txt', s + "\n", function (err) {
				if (err) throw err;
			});
		}
	}
       	
});


