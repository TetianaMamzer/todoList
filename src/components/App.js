import React, { Component } from 'react';
import TodoList from './todoList';
import './todoList/todoList.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'todos 1', completed: true },
      { id: 2, text: 'todos 2', completed: false },
      { id: 3, text: 'todos 3', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce( (total, todo) => (todo.completed ? total + 1 : total), 0)
    return (
      <div className="container">
        <div>
          <p>Загальна кількість завдань: {todos.length}</p>
          <p>Виконано завдань: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
