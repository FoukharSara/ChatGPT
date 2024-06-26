import { FastifyInstance } from 'fastify';
import resPrompt from '../models/response'; 

// export async function saveData() {
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
    // }
    
    // saveData();
export default async function indexRoute(fastify: FastifyInstance) {
     fastify.get('/', async (req, res) => {
        console.log(await resPrompt.find());
        try {
            const prompt = await resPrompt.find();
            if (prompt) {
                res.send(prompt);
            } else {
                res.status(404).send({ message: 'No prompt found' });
            }
        } catch (error) {
            res.status(500).send({ error: 'Error fetching prompt from database' });
        }
    });
}
