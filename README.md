# Keeggo Project - Projeto de Testes Automatizados com Cypress e Cucumber

## Objetivo

Esse projeto atende os requisitos do desafio da Keeggo que são:

Criar os cenários abaixo para o seguinte site:

Nome do website: Advantage Online Shopping
(“https://advantageonlineshopping.com/#/”)

  - Realize a busca de um produto;
  - Incluir produto no carrinho;
  - Validar os produtos incluídos no carrinho na tela de pagamento.

Este projeto realiza testes automatizados utilizando Cypress e Cucumber. O objetivo é garantir que todas as funcionalidades críticas da aplicação estejam funcionando corretamente.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

	•	Node.js (versão 14 ou superior)
	•	npm ou Yarn

## Instalação

Clone este repositório e instale as dependências do projeto:

```bash
git clone https://github.com/rangel90/keeggoProject.git
cd keeggoProject
npm install
```

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura do projeto:

```plaintext
cypress/
├── e2e/                       # Arquivos .feature (cenários de teste)
│   └── fluxo-carrinho.feature
├── feature/                   # Implementações dos steps
│   └── fluxo-carrinho.js
├── fixtures/                  # Dados de teste
├── support/                   # Comandos personalizados e configurações globais
│   ├── pages/
│   │   └── elements-fluxo-carrinho.js
│   └── commands.js
├── cypress.config.js          # Configurações do Cypress e Cucumber
└── README.md                  # Documentação do projeto
```

## Executando os testes

Para rodar todos os testes em um navegador:
```bash
npm run cy:open
```
Para rodar todos os testes em modo headless:
```bash
npm run cy:run
```

## License


[MIT](https://choosealicense.com/licenses/mit/)