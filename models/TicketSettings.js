const mongoose = require('mongoose');

const ticketSettingsSchema = new mongoose.Schema(
  {
    guildId: { type: String, required: true, unique: true },
    enabled: { type: Boolean, default: true },
    categoryId: { type: String, required: true },
    logChannelId: { type: String, required: true },
    supportRoleIds: [{ type: String }],
    ticketLimit: { type: Number, default: 3 },
    requireReason: { type: Boolean, default: false },
    welcomeMessage: {
      type: String,
      default:
        'Welcome {user} to Nexus! ❗Please dont mention any staff.',
    },
    closeMessage: {
      type: String,
      default: 'This ticket will be closed in 5 seconds.',
    },
    namingPattern: {
      type: String,
      default: '🎫│𝖳𝗂𝖼𝗄𝖾𝗍 {count}',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TicketSettings', ticketSettingsSchema);
