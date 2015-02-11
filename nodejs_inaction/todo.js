function Todo() {
	this.todos = [];
}

Todo.prototype.add = function(item) {
	if(!item) throw new Error('Todo#add needs an item');
	this.todos.push(item);
}

Todo.prototype.deleteAll = function() {
	this.todos = [];
}

Todo.prototype.getCount = function() {
	return this.todos.length;
}

Todo.prototype.doAsync = function(cb) {
	setTimeout(cb, 2000, false);
}

Todo.prototype.doAsyncSecond = function(cb) {
	setTimeout(cb, 2000);
}

module.exports = Todo;
