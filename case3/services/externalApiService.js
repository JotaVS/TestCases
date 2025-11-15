const apiConfig = require("../config/apiConfig");

async function fetchUserData(userId) {
  const apiUrl = `https://api.example.com/users/${userId}`;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiConfig.getApiKey()}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function sendNotification(message, recipient) {
  const apiUrl = "https://api.example.com/notifications";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiConfig.getApiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      recipient,
    }),
  });

  if (!response.ok) {
    throw new Error(`Notification failed: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

module.exports = {
  fetchUserData,
  sendNotification,
};
