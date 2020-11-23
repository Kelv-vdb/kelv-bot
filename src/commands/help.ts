import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help"],
    });
    this.categoryID = "opluffy";
  }
  exec(message: Message, args: any): any {
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setDescription("Liste des commandes disponibles")
      .addField("!erase n", "efface les n derniers messages [ADMIN]")
      .addField("!help", "liste les commandes")
      .addField("!follow", "te permet de suivre les avancées du bot")
      .addField("!unfollow", "te permet de ne plus suivre les avancées du bot")
      .addField(
        "![hi, hello, bonjour]",
        "te permet de jouer une musique d'accueil"
      );
    message.reply(embed).then(() => message.delete());
  }
}
