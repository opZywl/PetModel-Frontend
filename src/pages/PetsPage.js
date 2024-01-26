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
import PetList from '../components/PetList';
import EditPetForm from '../components/EditPetForm';

function PetsPage({ authToken }) {
  const [editingPetId, setEditingPetId] = useState(null);

  const handleEdit = (petId) => {
    setEditingPetId(petId);
  };

  const handleUpdate = () => {
    setEditingPetId(null);
  };

  return (
    <div>
      {editingPetId ? (
        <EditPetForm
          authToken={authToken}
          petId={editingPetId}
          onCancel={() => setEditingPetId(null)}
          onUpdate={handleUpdate}
        />
      ) : (
        <PetList authToken={authToken} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default PetsPage;
