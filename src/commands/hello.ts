import { Command } from "discord-akairo";
import { Message, VoiceConnection } from "discord.js";
import * as ytdl from "ytdl-core";
export default class HelloCommand extends Command {
  constructor() {
    super("hello", {
      aliases: ["bonjour", "hi", "hello", "wesh"],
    });
  }
  async exec(message: Message) {
    await message.delete();
    const voiceChannel = await message.member!.voice.channel;
    if (voiceChannel) {
      const connection: VoiceConnection = await voiceChannel.join();
      connection.play(
        ytdl("http://www.youtube.com/watch?v=atNkI6QFZ50", {
          quality: "highestaudio",
        }),
        { volume: 0.3 }
      );
    }
  }
}
