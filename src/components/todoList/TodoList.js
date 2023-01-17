import React from 'react';
import './todoList.css';

const TodoList = ({ todos, onDeleteTodo}) => (<ul>
  {todos.map( ({id, text})  => (
    <li key={id} className="TodoList__item">
      <p className='TodoList__text'>{text}</p>
      <button onClick={() => onDeleteTodo(id)}>Видалити</button>
    </li>
))}
</ul>);

export default TodoList;