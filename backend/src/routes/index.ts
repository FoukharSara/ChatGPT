import PromptResponse from "../models/response";
import { FastifyRequest, FastifyReply } from "fastify";

export async function saveData() {
  try {
    const newData = {
      prompt: "What is your favorite color?",
      response: "My favorite color is blue.",
    };
    const result = await PromptResponse.create(newData);
    console.log("Data saved successfully:", result);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

// saveData();
// export default async function indexRoute(fastify: FastifyInstance) {
//      fastify.get('/', async (req, res) => {
//         console.log(await resPrompt.find());
//         try {
//             const prompt = await resPrompt.find();
//             if (prompt) {
//                 res.send(prompt);
//             } else {
//                 res.status(404).send({ message: 'No prompt found' });
//             }
//         } catch (error) {
//             res.status(500).send({ error: 'Error fetching prompt from database' });
//         }
//     });
// }

// REVIEW Sample route handler
export const sampleHandler = (req: FastifyRequest, res: FastifyReply) => {
  return res.send({ hello: "world" });
};

export const indexHandler = async (req: FastifyRequest, res: FastifyReply) => {
  await saveData();
  console.log(await PromptResponse.find({}));
  try {
    const prompt = await PromptResponse.find({});
    if (prompt) {
      res.send(prompt);
    } else {
      res.status(404).send({ message: "No prompt found" });
    }
  } catch (error) {
    res.status(500).send({ error: "Error fetching prompt from database" });
  }
};