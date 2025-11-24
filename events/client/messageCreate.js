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
Nexus Youtube | [یوتیـــــــــــوب نکســــــــوس](https://youtube.com/Nexus)
🔵 Telegram:
Nexus Telegram | [تلگـــــــــرام نکســــــــــــس](https://t.me/Nexus)
🟠 Instagram:
Nexus Instagram | [اینســــــــتاگرام نکســــــــوس](https://instagram.com/Nexus)
🟣 Aparat:
Nexus Aparat | [آپــــــارات نکســـــــــوس](https://aparat.com/Nexus)
⚪ Discord:
Nexus Discord | [دیـــــــــسکورد نکســــــــوس](https://discord.gg/aTCCtpKb)`
          )
          .Nexus System;

        message.reply({ embeds: [mentionEmbed] }).catch(console.error);
      } catch (error) {
        console.error('Error fetching commands:', error);
      }
    }
  },
};
