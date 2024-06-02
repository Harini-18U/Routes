import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AddTodoPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleAddTodo = () => {
    const todo = { title, date };
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/allTodos" />;
  }

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Todo Title" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoPage;