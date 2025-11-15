function getApiKey() {
  return process.env.API_KEY;
}

function getApiTimeout() {
  return process.env.API_TIMEOUT || 5000;
}

function getApiBaseUrl() {
  return process.env.API_BASE_URL || "https://api.example.com";
}

module.exports = {
  getApiKey,
  getApiTimeout,
  getApiBaseUrl,
};
