var http = require("http");
var bl = require("bl");
var arry = ["", "", ""];

var count = 3;

function print()
{
		//console.log(count);
	if(count-- == 1) {
		for (var i = 0; i < 3; ++i)
		{
			console.log(arry[i]);
		}
	}
}

function fetchHtml(index)
{
	http.get(process.argv[index+2], function(response){
		//console.log("enter" + index);
		response.on("data", function(data){
			//console.log(data.toString());
			arry[index]+=data.toString();
			//console.log("fetch" + index);
		});
		response.on("end",print);
	});
}



for(var i = 0; i < 3; ++i)
{
	fetchHtml(i);
}

