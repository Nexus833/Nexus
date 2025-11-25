const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  once: false,
  async execute(message) {
    if (message.author.bot) return;

    const mention = new RegExp(`^<@!?${message.client.user.id}>( |)$`);

    if (message.content.match(mention)) {
      try {
        const commands = await message.client.application.commands.fetch();

        const helpCommand = commands.find((cmd) => cmd.name === 'help');
        const helpCommandId = helpCommand ? helpCommand.id : 'unknown';

        const mentionEmbed = new EmbedBuilder()
          .setColor(#58b9ff)
          .setDescription(
            `🔴 Youtube:
Nexus Youtube | [Nexus Youtube](https://youtube.com/Nexus)
🔵 Telegram:
Nexus Telegram | [Nexus Telegram](https://t.me/Nexus)
🟠 Instagram:
Nexus Instagram | [Nexus Instagram](https://instagram.com/Nexus)
🟣 Aparat:
Nexus Aparat | [Nexus Aparat](https://aparat.com/Nexus)
⚪ Discord:
Nexus Discord | [Nexus Dsicord](https://discord.gg/aTCCtpKb)`
          )
          .setFooter({ text: 'Nexus' })

        message.reply({ embeds: [mentionEmbed] }).catch(console.error);
      } catch (error) {
        console.error('Error fetching commands:', error);
      }
    }
  },
};
