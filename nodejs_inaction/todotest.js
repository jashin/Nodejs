var Todo = require("./todo");
var assert = require('assert');
var todo = new Todo();

function asyncTest(cb){
	todo.doAsync(function (value){
		console.log("value: " + value);
		assert.ok(value, "it's not true");
		cb();
	});
}

asyncTest(function(){
	console.log('complete');
});
