import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { makeEmbed, objectiveChannelId } from "../utils";

export default class ObjectivesCommand extends Command {
  constructor() {
    super("objectives", {
      aliases: ["objs", "objectives"],
    });
    this.categoryID = "personal";
  }
  async exec(message: Message): Promise<Message | void> {
    if (![objectiveChannelId].includes(message.channel.id))
      return message.delete();
    const embed = await makeEmbed(message);
    await message.channel.send(embed);
    await message.delete();
  }
}
