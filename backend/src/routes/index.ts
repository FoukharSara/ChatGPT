import PromptResponse from "../models/response";
import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai"

// import OpenAIApi from "openai";
import dotenv from "dotenv";

dotenv.config();



// config the api 
const openai = new OpenAI({
  apiKey:process.env.GPT_API_KEY,
})
interface PromptRequestBody {
  prompt: string;
}

export const promptHandler = (req:FastifyRequest, res:FastifyReply)=>{
  const { prompt  } = req.body as PromptRequestBody;
  try{
    return res.status(200).send({
      prompt,
    });
  }catch(error){
    console.log(error);
  }
}








// export async function saveData() {
//   try {
//     const newData = {
//       prompt: "What is your favorite color?",
//       response: "My favorite color is blue.",
//     };
//     const result = await PromptResponse.create(newData);
//     console.log("Data saved successfully:", result);
//   } catch (error) {
//     console.error("Error saving data:", error);
//   }
// }