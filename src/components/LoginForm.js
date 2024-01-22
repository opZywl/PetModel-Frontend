import React, { useState } from 'react';
import { login } from '../api';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login({ username, password });
      onLogin(token);
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <label>Usuário:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Senha:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
