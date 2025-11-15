function getConnectionString() {
  const dbUrl = process.env.DATABASE_URL;
  return dbUrl;
}

function createConnection() {
  const connectionString = getConnectionString();
  const connection = {
    url: connectionString,
    connected: true,
  };
  return connection;
}

function checkHealth() {
  const conn = createConnection();
  return { status: "healthy", connection: conn.url };
}

function executeQuery(sql) {
  const conn = createConnection();
  const result = {
    query: sql,
    connectedTo: conn.url,
    timestamp: new Date(),
  };
  return result;
}

module.exports = {
  checkHealth,
  executeQuery,
};
