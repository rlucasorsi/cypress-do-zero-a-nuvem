# 🧪 Testes Automatizados com Cypress 13.12.0

Este projeto contém testes automatizados de front-end utilizando **Cypress versão 13.12.0**. Os testes são executados em ambiente local ou de homologação, simulando o comportamento real do usuário.

---

## ✅ Pré-requisitos

Para executar os testes, certifique-se de ter os seguintes itens instalados no seu ambiente:

- **Node.js**: versão 18.18.2  
- **npm**: versão 9.8.1  
- **Cypress**: versão 13.12.0 (instalado via `npm install`)

Além disso, é necessário que a aplicação que será testada esteja em execução (local ou remotamente), conforme configurado no arquivo `cypress.config.js`.

---

## 🚀 Instalação do Projeto

1. Clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências do projeto:

```bash
npm install
```

---

## 🧪 Como Executar os Testes

### Modo Interativo (interface visual)

Abre a interface gráfica do Cypress, onde você pode selecionar os testes:

```bash
npm run cy:open
```

### Modo Headless (terminal)

Executa todos os testes diretamente no terminal, útil para pipelines de CI/CD:

```bash
npm run cy:start
```

---

## ⚙️ Estrutura dos Arquivos

```bash
cypress/
├── e2e/
│   └── exemplo.cy.js        # Arquivo de teste
├── fixtures/
│   └── exemplo.json          # Dados mockados para os testes
├── support/
│   ├── commands.js           # Comandos customizados
│   └── e2e.js                # Configurações globais para os testes
cypress.config.js             # Arquivo de configuração do Cypress
```
---

## 📄 Comando para CI/CD

```bash
npm ci
npx cypress run
```

---

## 🛠 Dicas

- Os testes devem estar organizados dentro da pasta `cypress/e2e`.

---
