


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", ` **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", ` **Bot Sahibi**  <@236173144300191754> \n **Lord Creative#0001** \n\n \ **Bot Geliştiricisi**  <@327064201245753344> \n **Bay Ördekcik#0001** \n\n  **Bot Sahibi**  <@749710702721106020> \n **Xir9999** \n`)
.addField("__**Sürümler**__", ` **Discord.js Sürümü** **|**  **v${Discord.version}** \n **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", ` **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", " " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://i.hizliresim.com/f0rRTk.png`)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}