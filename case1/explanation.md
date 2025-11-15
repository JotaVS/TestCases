# Database Connection API

Sistema de gerenciamento de conexões com banco de dados.

## Como executar

```bash
npm start
```

## Teste que gera o erro

Tente buscar registros de usuários:

```bash
curl http://localhost:4001/api/users
```

## Detalhes do erro

- **Tipo**: Error (MODULE_NOT_FOUND)
- **Localização**: `services/userService.js`, linha 1
- **Causa raiz**: `require("../datbase/connection")` tem typo no caminho (datbase ao invés de database)

## Como solucionar

Corrija o typo no caminho do require:

```javascript
const dbConnection = require("../database/connection");
```
