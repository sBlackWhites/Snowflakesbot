const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`snowflakes Eklenti Komutları`, client.user.avatarURL())
.setDescription(` snowflakes botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kanal Ayarla__`,` \`${prefix}kayıt-kanal-ayarla\` Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,` \`${prefix}kayıt-log-kanal-ayarla\` Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol__`,` \`${prefix}kayıt-ol\`  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol__`,` \`${prefix}kayıt-verilecek-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol__`,`\`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Giriş Sistemi__`,` \`${prefix}giriş-sistemi\` Kayıt Kanalına Atılacak Mesajı Ayarlar`,true)
.addField(`__İsim Sistem__`,`\`${prefix}isim-sistem\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`,true)
.addField(`__Kayıt Sistemi Kapat__`,` \`${prefix}kayıt-sistemi-kapat\` Kayıt Sistemini Tamamen Kapatır`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | snowflakes'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/f0rRTk.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}
