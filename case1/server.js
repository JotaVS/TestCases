const express = require("express");
const authController = require("./controllers/authController");

const app = express();
app.use(express.json());

app.post("/api/auth/login", authController.login);

app.get("/api/dashboard", authController.getDashboard);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Auth API running on port ${PORT}`);
  console.log(`Try POST: http://localhost:${PORT}/api/auth/login`);
  console.log(`Body: { "username": "admin", "password": "123456" }`);
});
