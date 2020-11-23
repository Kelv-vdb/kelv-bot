import { AkairoClient, CommandHandler, InhibitorHandler } from "discord-akairo";

class Client extends AkairoClient {
  private commandHandler: CommandHandler;
  readonly inhibitorHandler: InhibitorHandler;
  constructor() {
    super();
    this.commandHandler = new CommandHandler(this, {
      directory: __dirname + "/commands",
      prefix: "!",
      loadFilter(file) {
        return file.endsWith(".js");
      },
    });
    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: __dirname + "/inhibitors",
    });
    this.commandHandler.loadAll();
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.inhibitorHandler.loadAll();
  }
}
const client = new Client();
client
  .login(process.env.token)
  .then(() => {
    console.log("bot awake");
  })
  .catch((e) => console.error(e));
