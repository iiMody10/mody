const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

client.on('ready', () => {

  console.log(`Logged in as ${mentions.user}!`);
  
});



client.login(process.env.BOT_TOKEN);
