import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const isLoggedIn = email === 'root' && password === '12345678';
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/allTodos');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;