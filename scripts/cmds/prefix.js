module.exports = {
    config: {
        name: "Prefix",
        version: "1.0",
        author: "𝐑𝐨𝐧𝐚𝐥𝐝 ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "Prefix") return message.reply("voici mon Prefix 🌹+🌹");
}
};
