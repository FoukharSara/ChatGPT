import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai"
import {PromptRequestBody} from "../config/interfaces";
import CreatePromptResponse from "../repositories/createPromptResponse.repository";


export const promptHandler = async (req:FastifyRequest, res:FastifyReply)=>{
  const { prompt  } = req.body as PromptRequestBody;
  const openai = new OpenAI({
    apiKey:process.env.GPT_API_KEY,
  })
  try{
    const response = await openai.completions.create({
      model:"gpt-3.5-turbo-instruct",
      prompt:prompt,
      max_tokens: 3000,     // that leaves us with 1096 tokens 
      temperature: 0.7,  
      top_p: 1,          
      n: 1,
    }) ;
    let result = response.choices[0].text;
    await CreatePromptResponse(prompt, result);
    return res.status(201).send({
      prompt,
      response:response.choices[0].text,
    });
  }catch(error){
    res.status(400).send(error);
  }
}