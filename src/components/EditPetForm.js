import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditPetForm({ authToken, petId, onCancel, onUpdate }) {
  const [petData, setPetData] = useState({
    nome: '',
    idade: 0,
    especie: '',
    raca: '',
    dataAdocao: null,
  });

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pets/${petId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const petDetails = response.data;
        setPetData(petDetails);
      } catch (error) {
        console.error('Erro ao buscar detalhes do pet:', error);
      }
    };

    if (authToken && petId) {
      fetchPetDetails();
    }
  }, [authToken, petId]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/pets/${petId}`,
        petData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      
      onUpdate();
    } catch (error) {
      console.error('Erro ao atualizar pet:', error);
    }
  };

  return (
    <div>
      <h2>Editar Pet</h2>
      <label>Nome:</label>
      <input
        type="text"
        value={petData.nome}
        onChange={(e) => setPetData({ ...petData, nome: e.target.value })}
      />

      <label>Idade:</label>
      <input
        type="number"
        value={petData.idade}
        onChange={(e) => setPetData({ ...petData, idade: parseInt(e.target.value, 10) })}
      />

      <label>Espécie:</label>
      <input
        type="text"
        value={petData.especie}
        onChange={(e) => setPetData({ ...petData, especie: e.target.value })}
      />

      <label>Raça:</label>
      <input
        type="text"
        value={petData.raca}
        onChange={(e) => setPetData({ ...petData, raca: e.target.value })}
      />

      <button onClick={handleUpdate}>Atualizar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default EditPetForm;
