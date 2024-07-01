import PromptResponse from "../models/response";
import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai"

// import OpenAIApi from "openai";
import dotenv from "dotenv";

dotenv.config();

let result : string= "";

// config the api 
const openai = new OpenAI({
  apiKey:process.env.GPT_API_KEY,
})
interface PromptRequestBody {
  prompt: string;
}

export const promptHandler = async (req:FastifyRequest, res:FastifyReply)=>{
  const { prompt  } = req.body as PromptRequestBody;
  try{
    const response = {
      choices: [{ text: "My current result." }],
  }
    result = response.choices[0].text;
    saveData(prompt,result);
    return res.status(200).send({
      prompt,
      response:response.choices[0].text,
    });
  }catch(error){
    res.status(500).send(error);
    res.status(400).send(error);
  }
}


export async function saveData(prompt:string, response:string) {
  try {
    const newData = {
      prompt: prompt,
      response: result,
    };
    const results = await PromptResponse.create(newData);
    console.log("Data saved successfully:", results);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}