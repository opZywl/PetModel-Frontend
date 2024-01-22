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
