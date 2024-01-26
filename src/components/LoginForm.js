/*
 * Este arquivo faz parte do projeto PetModel (https://github.com/opZywl/PetModel-Frontend)
 * 
 * Copyright (c) 2024 - 2024 opZywl
 * 
 * Certifique-se de estar com o servidor backend em execução antes de iniciar o frontend para garantir
 * que as chamadas à API possam ser processadas corretamente. (https://github.com/opZywl/PetModel-Backend)
 *
 * Este projeto foi desenvolvido como parte do Desafio da NectarLabs para o controle de adoção de pets por uma ONG.
 */
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
