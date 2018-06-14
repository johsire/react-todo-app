var $ = require('jquery');

module.exports = {
  // This stores the values we enter on the browser locally.
  // when you refresh the browser your input dosen't erase.
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
  },
  
  // This captures/ fetches the input values client types in the browser.
	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

    }

    return $.isArray(todos) ? todos : [];
	},
	filteredTodos: function (todos, showCompleted, searchText) {
		var filteredTodos = todos;

		return filteredTodos;
	}
};
