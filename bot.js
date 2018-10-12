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

















Lion.on("message", async message => {
        if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var FaReSsS = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**Guild Info**`)
          .setDescription(`${guild.name}`)
          .addField(" 🆔   *Guild ID*  ", `${guild.id}`, true)
          .addField(" 🏳   *Guild Region*  ", `${guild.region}`, true)
          .addField(" 🎙   *Guild VoiceChannels*  ", `${voicechannels.size}`, true)
          .addField(" #⃣ *  Guild TextChannels  *", `${textchannels.size}`, true)
          .addField(" 👥  *  Guild Members Count  *", `${members}`, true)
          .addField(" 👤   *Guild Members*  ", `${humans}`, true)
          .addField(" 🚀   *Guild RolesCount*  ", `${guild.roles.size}`, true)
          .addField(" 👑   *CreatedBy*  ", `${guild.owner}`, true)
          .addField(` :watch:   *CreatedAt*   ` , `${guild.createdAt}` , true)
      
       message.channel.send(FaReSsS);
     // C O D E S & B Y F A R E S
      }
});

client.login(process.env.BOT_TOKEN);
