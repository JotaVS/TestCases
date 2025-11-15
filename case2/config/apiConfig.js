function getApiKey() {
  return process.env.API_KEY || "API_KEY_NOT_DEFINED";
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
