import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class ShrugCommand extends Command {
  constructor() {
    super("s", {
      aliases: ["s"],
    });
  }
  exec(message: Message, args: any): any {
    message.delete().then(() => {
      return console.log(message.channel.id);
    });
  }
}
