const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
//const bot = new Discord.Client()
const loadCommands = require("./Loaders/loadCommands")
const config = require("./config.js")

   // at the top of your file
   const { EmbedBuilder } = require('discord.js');


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

bot.on("messageCreate", async message => {
    if(message.content === "!caillou") return bot.commands.get("caillou").run(bot, message)
})

// bot.users.get('879448688206942248').send('yolo');

bot.on('message', async message => {
    let usr = bot.users.fetch(message.replace('<@!', '').replace('>', ''));
    message.channel.send(`id: ${usr.id}\nname: ${usr.username}`);
});

bot.users.send('879448688206942248', 'content');


interaction.channel.send('My message to react to.').then(sentMessage => {
	// Unicode emoji
	sentMessage.react('👍');

	// Custom emoji
	sentMessage.react('123456789012345678');
	sentMessage.react('<emoji:123456789012345678>');
	sentMessage.react('<a:emoji:123456789012345678>');
	sentMessage.react('emoji:123456789012345678');
	sentMessage.react('a:emoji:123456789012345678');
});



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

    const channelID = '1076064216135520297';

    //console.log(member.user.username)


    //const message = `Welcome to the server, ${member}`;

    const channel = member.guild.channels.cache.get(channelID);

    channel.send({ embeds: [Embed] });

    const dmMessage = `Bienvenue sur Obispo, ${member.user.username}`;
    
    member.send(dmMessage).catch(err => {
        return;
    })
})



bot.login(config.token)


