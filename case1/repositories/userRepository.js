function findById(userId) {
  const users = {
    1: { id: "1", username: "admin", name: "Administrator" },
    2: { id: "2", username: "user", name: "Regular User" },
  };

  return users[userId] || null;
}

module.exports = {
  findById,
};
