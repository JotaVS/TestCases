const dbConnection = require("../datbase/connection");

function getAllUsers(limit) {
  const query = `SELECT * FROM users LIMIT ?`;
  const result = dbConnection.query(query, [limit]);
  return result;
}

function getUserById(userId) {
  const query = `SELECT * FROM users WHERE id = ?`;
  const result = dbConnection.query(query, [userId]);
  return result[0] || null;
}

function createUser(userData) {
  const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
  const result = dbConnection.query(query, [userData.name, userData.email]);
  return result;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
