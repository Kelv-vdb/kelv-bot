import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { followRoleId, hasRole } from "../utils";

export default class UnfollowCommand extends Command {
  constructor() {
    super("unfollow", {
      aliases: ["unfollow"],
    });
    this.categoryID = "opluffy";
  }
  deleteRole(message: Message) {
    return message.member!.roles.remove(followRoleId);
  }
  async exec(message: Message, args: Array<string>): Promise<Message | void> {
    if (!hasRole(message)) return message.delete();
    await this.deleteRole(message);
    await message.reply("tu ne suis plus l'avancée du bot :-( !");
    await message.delete();
  }
}
