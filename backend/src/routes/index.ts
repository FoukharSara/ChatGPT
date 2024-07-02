import PromptResponse from "../models/response";
import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai"
import dotenv from "dotenv";


dotenv.config();

let result : string= "";

// config the api 
const openai = new OpenAI({
  apiKey:process.env.GPT_API_KEY,
})


//prompt handler
interface PromptRequestBody {
  prompt: string;
}
export const promptHandler = async (req:FastifyRequest, res:FastifyReply)=>{
  const { prompt  } = req.body as PromptRequestBody;
  try{
    const response = await openai.completions.create({
      model:"gpt-3.5-turbo-instruct",
      prompt:prompt,
      max_tokens: 3000,     // that leaves us with 1096 tokens 
      temperature: 0.7,  
      top_p: 1,          
      n: 1,
    }) ;
    result = response.choices[0].text;
    await saveData(prompt, result);
    return res.status(200).send({
      prompt,
      response:response.choices[0].text,
    });
  }catch(error){
    res.status(500).send(error);
    res.status(400).send(error);
  }
}

//save data in mongodb Compass
export async function saveData(prompt: string, response:string) {
  try {
    const newData = {
      prompt: prompt,
      response: response,
    };
    const results = await PromptResponse.create(newData);
    console.log("Data saved successfully:", results);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}