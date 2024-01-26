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
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
