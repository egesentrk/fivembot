const Discord = require('discord.js');
exports.run = (client, message, args) => {
          client.channels.get("737884088505204736").send(`[RANDEVU] Randevu oluşturuldu.,= **${message.content}** -  Randevu sorumlusu : **${message.author.tag}**`) 
   if (!message.guild) {
  return message.reply(':no_entry_sign: Bu komut, özel mesajlarda kullanılamamakta!'); }
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(':fire: Yeterli yetki, bulunmakata!');
  }
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Sayın admin, lütfen kabul edilme sebebi girin.');
  if (message.mentions.users.size < 1) return message.reply('Kime ve neden whitelist vereceğim.').catch(console.error);
  message.delete();
  message.reply('randevu saat olarak oluşturuldu.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Merhabalar,**\n`)
  .setTimestamp()
  .setDescription(' FiveM - [EVOLUTION] tester sunucusuna giriş sağlamak için randevunuz oluşturuldu..\n')
  .addField('Randevu saati;', reason)
  .setFooter('Castillo - Fivem Developer', client.user.avatarURL)
  return user.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 1
};

exports.help = {
  name: 'wl',
  description: 'Belirtilen kullanıcıyı, uyarır!',
  usage: 'uyarı'
};