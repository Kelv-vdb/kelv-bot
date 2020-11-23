import { Message } from "discord.js";
import { Command } from "discord-akairo";
export default class PingCommand extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping"],
    });
  }
  exec(message: Message, args: Array<string>) {
    message.delete().then(() => {
      return message.reply("pong !");
    });
  }
}
