import PromptResponse from "../models/promptResponse.model";

export default async function (prompt: string, response: string) {
  try {
    const newData = {
      prompt: prompt,
      response: response,
      created_at:new Date(),
    };
    const results = await PromptResponse.create(newData);
    console.log("Data saved successfully:", results);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}
