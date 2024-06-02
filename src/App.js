import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import AllTodosPage from './AllTodosPage';
import AddTodoPage from './AddTodoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/allTodos" element={<PrivateRoute><AllTodosPage /></PrivateRoute>} />
        <Route path="/addTodo" element={<PrivateRoute><AddTodoPage /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;