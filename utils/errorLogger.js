/**
 * Envia o erro para o webhook
 * @param {Error} error - O erro capturado
 * @param {string} projectRoot - Caminho raiz do projeto (não utilizado)
 * @param {object} additionalContext - Contexto adicional
 */
async function logAndSendError(error, projectRoot, additionalContext) {
  const errorPayload = {
    stackTrace: error && error.stack ? error.stack : String(error),
    additionalContext: JSON.stringify(additionalContext || {}),
    projectToken:
      "d0dd7cc90adb39023f5afb5ef93dcb1b6ec20e10dbb06c8b5466f386eea81206",
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
