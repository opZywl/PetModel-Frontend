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
