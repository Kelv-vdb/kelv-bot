import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";
import {
  removeTask,
  taskChannelId,
  objectiveChannelId,
  makeEmbed,
} from "../utils";

export default class removeCommand extends Command {
  constructor() {
    super("rm", {
      aliases: ["rm"],
      separator: ",",
      args: [
        {
          id: "id",
          type: "number",
          default: 0,
        },
        {
          id: "type",
          type: "string",
          default: "task",
          match: "rest",
        },
      ],
    });
    this.categoryID = "personal";
  }

  async exec(message: Message, args: any): Promise<Message | void> {
    if (args.id === 0) return message.delete();
    let response;
    let type: string;
    if (message.channel.id === taskChannelId) {
      type = "tasks";
    } else if (message.channel.id === objectiveChannelId) {
      type = "objectives";
    } else type = "";
    response = await removeTask(args.id, type);
    if (response.status !== 200) {
      await message.delete();
      return message.reply("le message n'a pas pu être supprimé");
    }
    const embed = await makeEmbed(message, type);
    const channel = (await message.channel) as TextChannel;
    await channel.bulkDelete(2, false);
    await channel.send(embed);
  }
}
