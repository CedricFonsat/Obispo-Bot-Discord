const Discord = require("discord.js")

module.exports = {
    name: "spam",

    async run(bot, message){
    
        for (let i = 0; i < 10; i++) {
            await message.reply(`@Roirraw#6607`)
        }
    }
}