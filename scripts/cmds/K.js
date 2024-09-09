 const fs = require('fs');
module.exports = {
  config: {
    name: "s",
    version: "1.0",
    author: "Kennethhttps://pastebin.com/vLS9hSye",
    countDown: 5,
    role: 0,
    shortDescription: "ok",
    longDescription: "auto bot reply to your message",
    category: "no prefix",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "😂":
          const replies = [
            " arrête de rires une mouche risque d'entrée dans ta bouche",
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
