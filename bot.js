const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('** ${mentions.user}عليكم السلام 🌹**');

  }

});

client.login(process.env.BOT_TOKEN);
