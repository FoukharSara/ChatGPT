import { Schema, model } from "mongoose";

// Interface
export interface PromptResponseI extends Document {
  prompt: string;
  response: {
    shortDesc:string,
    longDesc:string,
  }
  creates_at: Date // FIXME Fix name
}

// Schema
const PromptResponseSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  response: {
    shortDesc:{type : String, required:true},
    longDesc:{type : String, required:true},
  },
  creates_at:{type:Date, default: Date.now} // FIXME created_at fix naming error and default should be a function : () => Date.now()
});

// Model
const PromptResponse = model<PromptResponseI>(
  "PromptResponse",
  PromptResponseSchema
);

export default PromptResponse;
