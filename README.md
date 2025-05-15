# Projeto de Negociações

Este projeto é uma aplicação desenvolvida em TypeScript para gerenciar negociações financeiras, com arquitetura baseada em modelos, controladores e visualizações. Inclui também uma API Node.js para fornecer dados à aplicação.

## Estrutura do Projeto

- **app/models**: Modelos de dados (`Negociacao`, `Negociacoes`).
- **app/controllers**: Controladores da lógica de negócio (`NegociacaoController`).
- **app/views**: Renderização da interface do usuário (`NegociacoesView`, `MensagemView`, `Views`).
- **app/enums**: Enumerações auxiliares (`DiasDaSemana`).
- **servidor-api**: Servidor Node.js/Express para fornecer dados via API REST.

## Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **Live Server** (para servir a aplicação front-end)
- **Concurrently** (para rodar scripts simultaneamente)

## Como Executar o Projeto

1. Instale as dependências do projeto principal e do servidor API:

```powershell
npm install
cd servidor-api
npm install
cd ..
```

2. Compile o TypeScript e inicie o servidor de desenvolvimento:

```powershell
npm run start
```

Isso irá:
- Compilar o código TypeScript em `dist/js` (modo watch)
- Iniciar o servidor de API em `servidor-api` na porta 8080
- Servir a aplicação front-end com o Live Server

## Funcionalidades

- Cadastro de negociações financeiras
- Visualização de lista de negociações
- Validação para permitir negociações apenas em dias úteis
- API REST para fornecimento de dados de negociações

## Status do Projeto

🚧 Projeto em desenvolvimento. Novas funcionalidades e melhorias estão sendo implementadas.

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

---

> Para dúvidas ou sugestões, entre em contato.
