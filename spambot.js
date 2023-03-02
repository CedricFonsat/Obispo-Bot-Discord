const Discord = require('discord.js');
const client = new Discord.Client({
  intents: new Discord.Intents([
    Discord.Intents.GUILD_MEMBERS,
    Discord.Intents.GUILD_MESSAGES,
    Discord.Intents.DIRECT_MESSAGES
  ])
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.startsWith('!message')) {
      const username = message.content.split('axeldoux#2901')[1];
      const messageToSend = message.content.split('eeeeeee').slice(2).join('eeeee');
      const user = message.guild.members.cache.find(m => m.user.username === username);
      if (user) {
        user.send(messageToSend);
        console.log(`Sent message to ${user.user.username}: ${messageToSend}`);
      } else {
        console.log(`User not found: ${username}`);
      }
    }
  });
  

client.login(config.token);
