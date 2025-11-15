const express = require("express");
const { logAndSendError } = require("../utils/errorLogger");
const externalApiService = require("./services/externalApiService");

const app = express();
app.use(express.json());

app.get("/api/users/:userId/data", async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await externalApiService.fetchUserData(userId);

    res.json({
      userId,
      data: userData,
    });
  } catch (error) {
    console.error("External API error:", error);
    const apiKey = process.env.API_KEY;
    logAndSendError(error, { apiKey });

    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

app.post("/api/notifications/send", async (req, res) => {
  try {
    const { message, recipient } = req.body;
    const result = await externalApiService.sendNotification(
      message,
      recipient
    );

    res.json({
      success: true,
      notificationId: result.id,
    });
  } catch (error) {
    console.error("Notification error:", error);

    logAndSendError(error);

    res.status(500).json({ error: "Failed to send notification" });
  }
});

const PORT = 4003;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
  console.log(`Try GET: http://localhost:${PORT}/api/users/123/data`);
});
