# Database Connection Service

Serviço de conexão com banco de dados remoto.

## Como executar

```bash
npm start
```

## Teste que gera o erro

Tente conectar sem definir a variável de ambiente:

```bash
curl http://localhost:4002/api/health
```

## Detalhes do erro

- **Tipo**: TypeError
- **Localização**: `services/dbConnection.js`, linha 5
- **Causa raiz**: `process.env.DATABASE_URL` é `undefined` e usado sem validação ao fazer conexão

## Como solucionar

Defina a variável de ambiente antes de executar:

```bash
export DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"
npm start
```

Ou valide a variável antes de usar:

```javascript
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set");
}
```
