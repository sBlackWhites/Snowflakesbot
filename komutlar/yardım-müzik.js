const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`snowflakes Müzik Komutları`, client.user.avatarURL())
.setDescription(` snowflakes botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,` \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,` \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,` \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,` \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,` \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,` \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,` \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,` \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,` \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,` \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | snowflakes'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/f0rRTk.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
