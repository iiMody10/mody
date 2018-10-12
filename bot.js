const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

client.on('ready', () => {

  console.log(`Logged in as ${mentions.user}!`);
  
});

client.on('message', msg => {
let mentions = msg.mentions.members.first();
  if (msg.content === 'السلام عليكم') {

    msg.reply('** `` عليكم السلام ??**');

  }

});

client.login(process.env.BOT_TOKEN);
