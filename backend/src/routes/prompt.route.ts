import { FastifyRequest, FastifyReply } from "fastify";
import OpenAI from "openai";
import { PromptRequestBody } from "../config/interfaces";
import CreatePromptResponse from "../repositories/createPromptResponse.repository";
import { create } from "domain";

export const promptHandler = async (req: FastifyRequest, res: FastifyReply) => {
  const { prompt } = req.body as PromptRequestBody;
  const openai = new OpenAI({
    apiKey: process.env.GPT_API_KEY,
  });
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Give a short (about 300 characters) and a long (1500 characters) description in Frensh for this product: ${prompt}. I want it in this JSON format: {"shortDesc" : "short description in Frensh", "longDesc" : "long description in Frensh"}`,
      max_tokens: 3000, // that leaves us with 1096 tokens
      temperature: 0.7,
      top_p: 1,
      n: 1,
    });
    let result = response.choices[0].text;
    result = JSON.parse(result);

    await CreatePromptResponse(prompt, result);
    return res.status(201).send({
      prompt,
      response: result,
      created_at: new Date(Date.now()).toISOString(),
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
