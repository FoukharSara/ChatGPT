import { Schema, model } from "mongoose";

// Interface
export interface PromptResponseI extends Document {
  prompt: string;
  response: {
    shortDesc:string,
    longDesc:string,
  }
  creates_at: Date
}

// Schema
const PromptResponseSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  response: {
    shortDesc:{type : String, required:true},
    longDesc:{type : String, required:true},
  },
  creates_at:{type:Date, default: Date.now}
});

// Model
const PromptResponse = model<PromptResponseI>(
  "PromptResponse",
  PromptResponseSchema
);

export default PromptResponse;
