import { Schema, model } from "mongoose";

// Interface
interface resPromptI {
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

// const saveData = async () => {
//     try {
//         const newData = {
//             prompt: 'What is your favorite color?',
//             response: 'My favorite color is blue.'
//         };

//         const result = await resPrompt.create(newData);
//         console.log('Data saved successfully:', result);
//     } catch (error) {
//         console.error('Error saving data:', error);
//     }
// };

// // Call saveData function to test it
// saveData();

export default resPrompt;


