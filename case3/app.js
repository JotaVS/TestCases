const express = require("express");
const { logAndSendError } = require("../utils/errorLogger");
const dbService = require("./services/dbConnection");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  try {
    const status = dbService.checkHealth();
    res.json({ status });
  } catch (error) {
    console.error("Health check error:", error);
    logAndSendError(error, __dirname);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/api/query", (req, res) => {
  try {
    const sql = req.query.sql || "SELECT 1";
    const result = dbService.executeQuery(sql);
    res.json(result);
  } catch (error) {
    console.error("Query error:", error);
    logAndSendError(error, __dirname);
    res.status(500).json({ error: "Failed to execute query" });
  }
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Database Service API running on port ${PORT}`);
  console.log(`Try GET: http://localhost:${PORT}/api/health`);
});
