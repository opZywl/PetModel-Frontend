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
