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
















client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '$color 140') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |✅')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |❌')
}
}
});

client.on('message', message=>{
if (message.content ===  '$color 140'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 141; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
















client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === prefix + "mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  };
  });
 
     client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   //unmute
    if (command === prefix + "unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اتكلم')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
 
  };
 
  });
















client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100 : https://discord.gg/UpQHDF**`)


    }
});
















var prefix = "$"
client.on('message', message => {
  if (message.author.ban) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  client.channels.get("آي دي روم اللوق").send({embed : banembed})
}
});






client.login(process.env.BOT_TOKEN);
