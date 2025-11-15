const userRepository = require("../repositories/userRepository");

function authenticate(username, password) {
  if (username === "admin" && password === "123456") {
    return {
      success: true,
      token: "fake-jwt-token-12345",
      user: { id: "1", username: "admin" },
    };
  }

  return { success: false };
}

function getDashboardData(userId) {
  const user = userRepository.findById(userId);

  const displayName = formatUserName(user);

  return {
    welcome: `Welcome, ${displayName}`,
    stats: {
      loginCount: 42,
      lastAccess: new Date().toISOString(),
    },
  };
}

function formatUserName(user) {
  return user.name.toUpperCase();
}

module.exports = {
  authenticate,
  getDashboardData,
};
