import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllTodosPage = () => {
  const navigate = useNavigate();
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  return (
    <div>
      <h2>All Todos</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.title} - {todo.date}</li>
          ))}
        </ul>
      ) : (
        <p>No Todos added</p>
      )}
      <button onClick={() => navigate('/addTodo')}>Add Todo</button>
    </div>
  );
};

export default AllTodosPage;