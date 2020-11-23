import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";
import { addTask, makeEmbed, objectiveChannelId, Task } from "../utils";

export default class TaskCommand extends Command {
  constructor() {
    super("task", {
      aliases: ["add", "obj", "objective"],
      separator: ",",
      args: [
        {
          id: "title",
          type: "string",
          default: null,
        },
        {
          id: "description",
          type: "string",
          default: null,
        },
      ],
    });
    this.categoryID = "personal";
  }

  async exec(message: Message, args: any): Promise<Message | void> {
    if (args.length < 2) return await message.delete();
    const payload: Task = { ...args };
    addTask(payload);
    const channel = message.channel as TextChannel;
    if (message.channel.id !== objectiveChannelId) {
      return;
    }
    await channel.bulkDelete(2, false);
    const embed = await makeEmbed(message, payload.type);
    await channel.send(embed);
  }
}
