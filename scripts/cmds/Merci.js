module.exports = {
    config: {
        name: "merci",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "po Prefix",
        longDescription: "po Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "Merci") return message.reply(" pas de quoi 🦅? je suis là pour répondre à tout tes question s ✨🌿✅");
}
};
