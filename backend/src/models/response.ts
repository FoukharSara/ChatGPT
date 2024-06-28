import { Schema, model } from "mongoose";

// Interface
export interface PromptResponseI extends Document {
  prompt: string;
  response: string;
export interface PromptResponseI extends Document {
  prompt: string;
  response: string;
}

// Schema
const PromptResponseSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
const PromptResponseSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
});

// Model
const PromptResponse = model<PromptResponseI>(
  "PromptResponse",
  PromptResponseSchema
);
const PromptResponse = model<PromptResponseI>(
  "PromptResponse",
  PromptResponseSchema
);

export default PromptResponse;

export default PromptResponse;