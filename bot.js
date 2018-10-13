const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(msg.guild.iconURL)
    .addField('🌐 **اسم السيرفر : **' , `**[ __${msg.guild.name}__ ]**`,true)
    .addField('🌍 ** موقع السيرفر :**',`**[ __${"EGYPT"}__ ]**`,true)
    .addField('🎖** الرتب :**',`**[ __${msg.guild.roles.size}__ ]**`,true)
    .addField('👤** عدد الاعضاء :**',`**[ __${msg.guild.memberCount}__ ]**`,true)
    .addField('✅** عدد الاعضاء الاونلاين :**',`**[ __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ ]**`,true)
    .addField('📝** الرومات الكتابية :**',`**[ __${msg.guild.channels.filter(m => m.type === 'text').size}__ ]**`,true)
    .addField('🔊** رومات الصوت :**',`**[ __${msg.guild.channels.filter(m => m.type === 'voice').size}__ ]**`,true)
    .addField('👑** صاحب السيرفر :**',`**[ __${msg.guild.owner}__ ]**`,true)
    .addField('🆔** ايدي السيرفر :**',`**[ __${msg.guild.id}__ ]**`,true)
    .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
















const bannedwords = [
    "كل زق",
    "كسمك",
    "كل خرا",
    "يلعن",
    "يا خول",
    "يا عرص"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});
















client.on('message', message => {
 
    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
     
   
});
















client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel("AgentX VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});
















const arraySort = require('array-sort'),
table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "topinvite")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});




client.login(process.env.BOT_TOKEN);
