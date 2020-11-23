import {
  Collection,
  Message,
  MessageEmbed,
  Snowflake,
  TextChannel,
} from "discord.js";
import axios from "axios";

function addTask(payload: Task) {
  axios({
    method: "post",
    url: `${baseUrl}/objectives`,
    data: {
      title: payload.title,
      description: payload.description,
    },
  }).catch((e) => {
    console.error(e);
  });
}

async function getTasks(): Promise<Array<Task> | undefined> {
  return (await axios.get(`${baseUrl}/objectives`)).data;
}
async function removeTask(id: number, type: string) {
  try {
    return await axios({
      method: "delete",
      url: `${baseUrl}/${type}/${id}`,
    });
  } catch (e) {
    return e.response.status;
  }
}
async function makeEmbed(message: Message) {
  const tasks = (await getTasks()) as Array<Task>;
  let embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle("Liste des objectifs");
  tasks.forEach((task: Task, index: number) => {
    ++index;
    let field = `${task.description}. **${task.id}**`;
    if (index < tasks.length) {
      field += "\n\u200b";
    }
    embed.addField(task.title, field);
  });
  return embed;
}
function hasRole(message: Message): boolean {
  return message.member!.roles.cache.has(followRoleId);
}

const baseUrl = "http://192.168.1.66:8000/api";
const objectiveChannelId = "769498768126902272";
const followRoleId = "761209227791302668";
interface Task {
  title: string;
  description: string;
  type: string;
  id?: number;
}
const googleApiKey = "AIzaSyCeLT5LvigTUe_NRjRvExWgpqUsEQbGMwk";
const handAvailable = false;
export {
  addTask,
  getTasks,
  removeTask,
  makeEmbed,
  hasRole,
  baseUrl,
  objectiveChannelId,
  followRoleId,
  Task,
  googleApiKey,
  handAvailable,
};
