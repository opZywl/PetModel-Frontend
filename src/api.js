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
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export const getPets = async (token) => {
  try {
    const response = await api.get('/pets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const adoptPet = async (petId, token) => {
  try {
    await api.put(`/pets/adopt/${petId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

