const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    const botMention = `<@${message.client.user.id}>`;
    const botMentionNick = `<@!${message.client.user.id}>`;
    const content = message.content.trim();

    if (content === botMention || content === botMentionNick) {
      const embed = new EmbedBuilder()
        .setColor('#2B2D31')
        .setTitle('Nexus')
        .setDescription(`:red_circle: **Youtube:**\nNexus Youtube | [\\u06cc\\u0648\\u062a\\u06cc\\u200c\\u0628 \\u0646\\u06a9\\u0633](https://youtube.com/Nexus)\n\n:blue_circle: **Telegram:**\nNexus Telegram | [\\u062a\\u0644\\u06af\\u200c\\u0631\\u0627\\u0645 \\u0646\\u06a9\\u0633](https://t.me/Nexus)\n\n:orange_circle: **Instagram:**\nNexus Instagram | [\\u0627\\u06cc\\u0646\\u0633\\u200c\\u062a\\u0627\\u06af\\u200c\\u0631\\u0627\\u0645 \\u0646\\u06a9\\u0633](https://instagram.com/Nexus)\n\n:purple_circle: **Aparat:**\nNexus Aparat | [\\u0622\\u067e\\u200c\\u0627\\u0631\\u0627\\u062a \\u0646\\u06a9\\u0633](https://aparat.com/Nexus)\n\n:white_circle: **Discord:**\nNexus Discord | [\\u062f\\u06cc\\u200c\\u0633\\u06a9\\u0648\\u0631\\u062f \\u0646\\u06a9\\u0633](https://discord.gg/aTCCtpKb)`)
        .setThumbnail(message.client.user.displayAvatarURL({ size: 256 }))
        .setFooter({ 
          text: 'Nexus' 
        })
        .setTimestamp();

      return message.reply({ 
        embeds: [embed],
        allowedMentions: { repliedUser: false }
      }).catch(() => {});
    }
  },
};
