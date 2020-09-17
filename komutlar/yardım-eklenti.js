const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  const fynxdblapi = require('dblapi.js')
const fynxdbl = new fynxdblapi(fynx.dbltoken, client) 
fynxdbl.hasVoted(message.author.id).then(fynxoyverdi => {
      if(fynxoyverdi)  {
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`snowflakes Eklenti Komutları`, client.user.avatarURL())
.setDescription(` snowflakes botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,` \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,` \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | snowflakes'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/f0rRTk.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
                     } else {
        message.channel.send("Bu komutu kullanabilmek için bota oy vermeniz gerekmektedir. Bota oy verebilmek için https://discordbots.org/bot/713713727794446397/vote sitesini ziyaret edebilirsiniz. | Oy verdiyseniz 3 dakika beklemeniz gerekmektedir.")
      }
  })
  };
exports.config = {
name: "eklenti",
  aliases: []
}
