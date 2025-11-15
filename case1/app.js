const express = require("express");
const { logAndSendError } = require("../utils/errorLogger");
const userService = require("./services/userService");

const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const users = userService.getAllUsers(limit);
    res.json(users);
  } catch (error) {
    console.error("Users fetch error:", error);
    logAndSendError(error, __dirname);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/api/users/:userId", (req, res) => {
  try {
    const { userId } = req.params;
    const user = userService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("User fetch error:", error);
    logAndSendError(error, __dirname);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Database Connection API running on port ${PORT}`);
  console.log(`Try GET: http://localhost:${PORT}/api/users`);
});
