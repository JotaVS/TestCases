# API Gateway

Gateway de integração com serviços externos.

## Como executar

```bash
npm start
```

## Teste que gera o erro

Tente buscar dados de usuário sem configurar a variável de ambiente:

```bash
curl http://localhost:4003/api/users/123/data
```

## Detalhes do erro

- **Tipo**: TypeError
- **Localização**: `config/apiConfig.js`, linha 2 (função `getApiKey`)
- **Causa raiz**: `process.env.API_KEY` é `undefined` e usado sem validação no header de autorização

## Como solucionar

Valide a variável de ambiente antes de usar:

```javascript
function getApiKey() {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set");
  }

  return apiKey;
}
```

Ou crie um arquivo `.env` com as variáveis necessárias e use o pacote `dotenv`.
