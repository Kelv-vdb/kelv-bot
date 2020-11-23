import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { followRoleId, hasRole } from "../utils";
export default class FollowCommand extends Command {
  constructor() {
    super("follow", {
      aliases: ["follow"],
      channel: "guild",
    });
    this.categoryID = "opluffy";
  }

  addRole(message: Message) {
    return message.member!.roles.add(followRoleId);
  }
  async exec(message: Message, args: Array<string>): Promise<Message | void> {
    if (hasRole(message)) return message.delete();
    await this.addRole(message);
    await message
      .reply("tu suis maintenant l'avancée du bot !")
      .then(() => message.delete());
  }
}
