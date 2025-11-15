# Auth Middleware API

Sistema de autenticação com middleware para APIs.

## Como executar

```bash
npm start
```

## Teste que gera o erro

1. Primeiro faça login (vai funcionar):

```bash
curl -X POST http://localhost:4001/api/auth/login -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"123456\"}"
```

2. Depois tente acessar o dashboard com um userId inválido (vai gerar erro):

```bash
curl http://localhost:4001/api/dashboard -H "user-id: 999"
```

## Detalhes do erro

- **Tipo**: TypeError
- **Localização**: `services/authService.js`, linha 26 (função `formatUserName`)
- **Causa raiz**: O objeto `user` é null quando o userId não existe, e a função tenta acessar `user.name`

## Como solucionar

Adicione validação antes de acessar propriedades do objeto:

```javascript
function formatUserName(user) {
  if (!user) {
    return "Unknown User";
  }
  return user.name.toUpperCase();
}
```
