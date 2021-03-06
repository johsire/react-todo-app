var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container_message">Just chilling - nothing to do</p>
        );
      }
      return todos.map((todo) => {
        return (
          // we used the spread method to iterate thru our todo list and we output them individually
          // we access the list id # using todo.id notation/ syntax as shown below;
          // we use the unique Key property to initialize fetching our id and todo values and render out our Todo component:
          // The key property helps react keep track of each list item.
          // The Spread operator takes every attribut on Todo whcih in our case its ID & TEXT and passes it down as a prop.
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
          // we passed the onToggle from TodoApp to Todo file;
        );
      });
    };
  return (
    <div>
    {renderTodos()}
    </div>
    )
  }
});

module.exports = TodoList;
