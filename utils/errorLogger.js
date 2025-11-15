/**
 * Envia o erro para o webhook
 * @param {Error} error - O erro capturado
 * @param {string} projectRoot - Caminho raiz do projeto (não utilizado)
 * @param {object} additionalContext - Contexto adicional
 */
async function logAndSendError(error, additionalContext) {
  const additionalContextString =
    typeof additionalContext === "string"
      ? additionalContext
      : JSON.stringify(additionalContext || {}, (key, value) =>
          value === undefined ? "undefined" : value
        );
  const errorPayload = {
    stackTrace: error && error.stack ? error.stack : String(error),
    additionalContext: additionalContextString,
    projectToken:
      "bcb564a2ad87c3bca635fe0f6a379c81dcd1c033ba008ec1949385732e0d4ac9",
  };

  try {
    const response = await fetch("http://127.0.0.1:3000/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(errorPayload),
    });

    const webhookResponse = await response.json();
    console.log("Webhook response:", webhookResponse);
  } catch (err) {
    console.error("Failed to send webhook:", err);
  }
}

module.exports = { logAndSendError };
