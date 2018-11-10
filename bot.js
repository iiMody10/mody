const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : mody ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`استغفر الله`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});















const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', () => {
var server = "509529711093874708"; // ايدي السررفر
var channel = "509529711093874711";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , **')
    },1);
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
