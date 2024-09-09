const fs = require('fs');
module.exports = {
  config: {
    name: "ns",
    version: "1.0",
    author: "Kennethhttps://pastebin.com/vLS9hSye",
    countDown: 5,
    role: 0,
    shortDescription: "o🟢k",
    longDescription: "auto bot reply to your message",
    category: "no prefix",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "🙂":
          const replies = [
            " Tu es aussi bon que mon maître ",
          ];
          api.setMessageReaction("🥰", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
          });
          break;
        default:
          return; 
      }
    }
  },
};
