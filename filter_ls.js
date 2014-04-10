var fs = require("fs");

var ext = process.argv[3]

fs.readdir(process.argv[2],function (err,data){
	if (err) throw err;
	for(var i = 0; i < data.length; ++i)
	{
		var filenameArray = data[i].split(".");
		if(filenameArray.length > 1 && filenameArray[filenameArray.length-1] == ext)
			console.log(data[i]);
	}
})