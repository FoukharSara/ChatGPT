import { Schema, model } from "mongoose";

// Interface
export interface resPromptI extends Document{
    prompt: string;
    response: string;
}

// Schema
const resPromptSchema: Schema = new Schema({
    prompt: { type: String, required: true },
    response: { type: String, required: true }
});

// Model
const resPrompt = model<resPromptI>('PromptResponse', resPromptSchema);

export default resPrompt;


// 



