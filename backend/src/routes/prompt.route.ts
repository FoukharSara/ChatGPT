import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai";
import { PromptRequestBody } from "../config/interfaces";
import CreatePromptResponse from "../repositories/CreatePromptResponse.repository";
import { create } from "domain";

export const promptHandler = async (req: FastifyRequest, res: FastifyReply) => {
  const { domain, language, product_name} = req.body as PromptRequestBody;
  const openai = new OpenAI({
    apiKey: process.env.GPT_API_KEY,
  });
  const finalPrompt =`You are an experienced SEO writer and ${domain} expert.
  You must write in ${language}
  The tone should be friendly and advice-giving
  
  Write a product sheet for ${domain} ${product_name}
  The goal is to sell the product
  The product sheet must contain all good SEO practices, in particular mentioning the following keyword ${domain} ${product_name} in the title and description.
  Write me a stringified JSON response for this list as key:value 
  -- shortDesc : a short description of 300 words; add HTML tags for SEO purposes; don't use <h1> Tag
  -- longDesc : A long description of 1500 words on the wine and the estate; add HTML tags for SEO purposes; don't use <h1> Tag
  -- metatitle : a metatitle of the product for SEO purposes of 50 words plain text
  -- metadescription : a metadescription of the product for SEO purposes of 150 words plain text`;
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt:finalPrompt,
      max_tokens: 3000, // that leaves us with 1096 tokens
      temperature: 0.7,
      top_p: 1,
      n: 1,
    });
    let result = response.choices[0].text;
    result = JSON.parse(result);

    await CreatePromptResponse(finalPrompt, result);
    return res.status(201).send({
      finalPrompt,
      response: result,
      created_at: new Date(Date.now()).toISOString(),
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
