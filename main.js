const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const config = require("./config.js")
 

bot.login(config.token)
bot.commands = new Discord.Collection()

loadCommands(bot)

bot.on("messageCreate", async message => {
    if(message.content === "!ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("messageCreate", async message => {
    if(message.content === "!lulu") return bot.commands.get("lulu").run(bot, message)
})

bot.on("messageCreate", async message => {
    if(message.content === "!spam") return bot.commands.get("spam").run(bot, message)
})



bot.on("ready", async () => {
console.log(`${bot.user.username} est bien en ligne !`);
})


bot.on("guildMemberAdd", member => {

// inside a command, event listener, etc.
const Embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`Welcome to ${member.user.username}`)
	.setAuthor({ name: `${bot.user.username}`, iconURL: 'https://cdn.dribbble.com/users/5921730/screenshots/14129193/media/a5bf29de59354a54430417299314f16c.png?compress=1&resize=400x300&vertical=top', url: 'https://discord.gg/8HjKKG5b' })
	.setDescription(`Bienvenue sur le server créer par ${bot.user.username}`)
	.setThumbnail('https://cdn.dribbble.com/users/5921730/screenshots/14129193/media/a5bf29de59354a54430417299314f16c.png?compress=1&resize=400x300&vertical=top')
	.setTimestamp()
	//.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    const channelID = '1076071906945548291';

    //console.log(member.user.username)


    //const message = `Welcome to the server, ${member}`;

    const channel = member.guild.channels.cache.get(channelID);

    channel.send({ embeds: [Embed] });

    const dmMessage = `Bienvenue sur Obispo, ${member.user.username}`;
    
    member.send(dmMessage).catch(err => {
        return;
    })
})


