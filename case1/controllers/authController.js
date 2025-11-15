const authService = require("../services/authService");
const { logAndSendError } = require("../../utils/errorLogger");
const path = require("path");

function login(req, res) {
  const { username, password } = req.body;

  const result = authService.authenticate(username, password);

  if (result.success) {
    res.json({
      token: result.token,
      user: result.user,
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}

function getDashboard(req, res) {
  try {
    const userId = req.headers["user-id"];
    const dashboardData = authService.getDashboardData(userId);

    res.json(dashboardData);
  } catch (error) {
    console.error("Dashboard error:", error);

    logAndSendError(error);

    res.status(500).json({ error: "Failed to load dashboard" });
  }
}

module.exports = {
  login,
  getDashboard,
};
