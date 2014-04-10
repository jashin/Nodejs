var fs = require('fs');

var filecontent = fs.readFileSync(process.argv[2]);

var contentArray = filecontent.toString().split('\n');

// var count = 0;

// for(var i = 0; i < contentArray.length; ++i)
// {
// 	//if(contentArray[i].length == 1)
// 		++count;
// 	//console.log(contentArray[i]);
// }

console.log(contentArray.length-1);