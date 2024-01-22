# PetModel-Frontend API

Este é o Frontend do projeto PetModel, uma aplicação para controle de pets de uma ONG. Desenvolvido como parte do desafio proposto pela NectarLabs.

## Como Iniciar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

2. Navegue até o diretório do projeto: 
   ```bash
   cd PetModel-Frontend
   ```

3. Execute o comando:

```bash
npm install
```

O aplicativo estará disponível em http://localhost:3000.

## Funcionalidades

**Listagem de Pets:**

Criei o componente `PetList` para exibir a lista de pets disponíveis.
Cada item na lista (`PetItem`) contém botões para edição, exclusão e marcação como adotado.
Listagem de Pets Adotados:

Implementei a listagem dos pets adotados, exibindo a data de adoção.
Formulário de Edição:

Criei o componente `EditPetForm` para editar as informações de um pet.
O formulário é exibido ao clicar no botão de edição de um pet.
Autenticação (Opcional):

Implementei a página de login (`LoginPage`).
Integrei com as chamadas à API que exigem autenticação.

## Bibliotecas Utilizadas

`React`
`Axios`
`React Router DOM`

## Organização do Projeto

**src/components:** 
  - PetList.js: Componente para listar pets disponíveis.
  - PetItem.js: Componente para exibir informações de um pet.
  - EditPetForm.js: Componente para editar as informações de um pet.

**src/pages:** 
  - LoginPage.js: Componente para a página de login.
  - PetsPage.js: Componente para a página de listagem de pets.

**src:** 
  - api.js: Serviço para realizar chamadas à API do backend.
  - App.js: Componente principal que organiza a lógica da aplicação.
  - App.css: Estilos para o componente principal.
  - index.js: Ponto de entrada principal da aplicação React.
  - index.css: Estilos globais.


- **Autenticação:** `POST /auth/login`
  Permite autenticar-se e obter um token JWT para acessar rotas protegidas.

## Licença

Este projeto é licenciado sob a Licença GNU General Public License v3.0. - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Motivo

Este projeto foi desenvolvido como parte do Desafio da NectarLabs para o controle de adoção de pets por uma ONG.