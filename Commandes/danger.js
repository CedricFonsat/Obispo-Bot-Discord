const Discord = require("discord.js")

module.exports = {
    name: "danger",

    async run(bot, message){
        await message.setImage('https://fr.dreamstime.com/photos-images/danger.html')
    }
}