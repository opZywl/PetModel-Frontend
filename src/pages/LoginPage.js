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
import Login from '../components/Login';
import PetsPage from './PetsPage';

function LoginPage() {
  const [authToken, setAuthToken] = useState(null);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <div>
      {authToken ? (
        <PetsPage authToken={authToken} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginPage;
