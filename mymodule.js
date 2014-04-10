var fs = require("fs");
var path = require("path");

module.exports = function(directory_name,extension_filter,callback){
	fs.readdir(directory_name, function (err, list) {
		if (err) return callback(err);
		
		// var filelist = "";
  		
  // 		list.forEach(function (file) {
		//     if (path.extname(file) === '.' + extension_filter)
		//     	filelist += file + "/";
		// })

		// if(filelist.length > 0)
		// 	filelist = filelist.substring(0, filelist.length-1);

		// callback(null, filelist.split("/"));

		list = list.filter(function (file) {
		  	return path.extname(file) === '.' + filterStr
		})
		callback(null, list);
	});
}