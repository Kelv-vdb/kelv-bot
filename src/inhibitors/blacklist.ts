import { Command } from "discord-akairo";
import { Message } from "discord.js";
const { Inhibitor } = require("discord-akairo");
class BlacklistInhibitor extends Inhibitor {
  constructor() {
    super("blacklist", {
      reason: "blacklist",
    });
  }
  exec(message: Message, command: Command) {
    if (command.categoryID === "default" || message.guild === null)
      return false;
    if (command.categoryID === "personal")
      return !(message.guild.id === "678307270144163861");
    if (command.categoryID === "opluffy")
      return !(message.guild.id === "580280785089855498");
    else return false;
  }
}
module.exports = BlacklistInhibitor;
