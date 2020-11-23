import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class BuzzCommand extends Command {
  constructor() {
    super("buzz", {
      aliases: ["buzz"],
    });
    this.categoryID = "opluffy";
  }
  async exec(message: Message): Promise<Message> {
    return message.reply("enregistré");
  }
}
