import { FastifyInstance } from 'fastify';
import resPrompt from '../models/response'; 

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
