var React = require('react');

var TodoList = require('TodoList');

var AddTodo = require('AddTodo');

var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Check the  mail',
          completed: false
        }, {
          id: uuid(),
          text: 'Go for a bike ride',
          completed: true
        }, {
          id: uuid(),
          text: 'Clean the backyard',
          completed: false
        }, {
          id: uuid(),
          text: 'Practise Javascript algorithms',
          completed: true
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        // this is just setting it to its intial state, we haven't changed/ updated anything just yet.
        ...this.state.todos,
        {
          id: uuid(),
          // we used node package to generate a UUA ID(universal unique Identifier);
          // a long random string that uses time stamp to seed the data.
          text: text,
          completed: false
        }
      ]
    })
  },

  handleToggle: function (id) {
    alert(id);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    });
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
      <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
