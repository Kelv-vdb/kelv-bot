import { Command } from "discord-akairo";
import { Message, TextChannel } from "discord.js";

export default class EraseCommand extends Command {
  constructor() {
    super("erase", {
      aliases: ["erase", "del"],
      clientPermissions: ["MANAGE_MESSAGES"],
      userPermissions: ["MANAGE_MESSAGES"],
      args: [
        {
          id: "amount",
          type: "number",
          default: 1,
        },
      ],
    });
  }
  async exec(message: Message, args: any) {
    await message.delete();
    return (message.channel as TextChannel).bulkDelete(args.amount, false);
  }
}
