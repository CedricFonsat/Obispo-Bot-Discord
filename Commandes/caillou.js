const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "caillou",

    async run(bot, message){

        const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`DESTRUCTION GROS CAILLOU`)
        .setAuthor({ name: `${bot.user.username}`, iconURL: 'https://i.ytimg.com/vi/N5tliG15m0Y/maxresdefault.jpg', url: 'https://i.ytimg.com/vi/N5tliG15m0Y/maxresdefault.jpg' })
        .setDescription(`Bienvenue sur le server créer par ${bot.user.username}`)
        .setImage('https://i.ytimg.com/vi/N5tliG15m0Y/maxresdefault.jpg')
        .setTimestamp()
        
      for (let i = 0; i < 10; i++) {
        await message.reply({ embeds: [Embed] });
      }
  
    }
}