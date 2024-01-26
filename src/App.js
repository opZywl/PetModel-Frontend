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
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Erro ao buscar a lista de pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Model Frontend</h1>
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              {pet.nome} - {pet.especie} - {pet.raca}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
