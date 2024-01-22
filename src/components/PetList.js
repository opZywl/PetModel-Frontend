import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PetList({ authToken, onEdit, onDelete, onAdopt }) {
  const [pets, setPets] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pets', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const allPets = response.data;
        setPets(allPets);

        const adoptedPets = allPets.filter((pet) => pet.dataAdocao !== null);
        setAdoptedPets(adoptedPets);
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
      }
    };

    if (authToken) {
      fetchPets();
    }
  }, [authToken]);

  const handleEdit = (petId) => {
    onEdit(petId);
  };

  const handleDelete = async (petId) => {
    try {
      await axios.delete(`http://localhost:3000/pets/${petId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const response = await axios.get('http://localhost:3000/pets', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const allPets = response.data;
      setPets(allPets);

      const adoptedPets = allPets.filter((pet) => pet.dataAdocao !== null);
      setAdoptedPets(adoptedPets);
    } catch (error) {
      console.error('Erro ao excluir pet:', error);
    }
  };

  const handleAdopt = async (petId) => {
    try {
      await axios.put(
        `http://localhost:3000/pets/adopt/${petId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const response = await axios.get('http://localhost:3000/pets', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const allPets = response.data;
      setPets(allPets);

      const adoptedPets = allPets.filter((pet) => pet.dataAdocao !== null);
      setAdoptedPets(adoptedPets);
    } catch (error) {
      console.error('Erro ao adotar pet:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Pets Disponíveis para Adoção</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.nome} - {pet.especie} - {pet.raca} - Data de Adoção: {pet.dataAdocao}
            <button onClick={() => handleEdit(pet.id)}>Editar</button>
            <button onClick={() => handleDelete(pet.id)}>Excluir</button>
            <button onClick={() => handleAdopt(pet.id)}>Adotar</button>
          </li>
        ))}
      </ul>

      <h2>Lista de Pets Adotados</h2>
      <ul>
        {adoptedPets.map((pet) => (
          <li key={pet.id}>
            {pet.nome} - {pet.especie} - {pet.raca} - Data de Adoção: {pet.dataAdocao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
