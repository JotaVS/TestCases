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
      "6e2dc2501d24d196f16f6edbd542dc4425d7043fa16ab9a8946b5c01b1a6d4e6",
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
