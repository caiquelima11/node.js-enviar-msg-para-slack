const newLocal = '@slack/webhook';
const { IncomingWebhook } = require(newLocal);
const url = "URL DO WEBHOOK DE ENTRADA GERADO NO SLACK"

const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  await webhook.send({
    text: 'Essa mensagem foi enviada via API!',
  });
})();


