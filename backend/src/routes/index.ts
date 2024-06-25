import { FastifyInstance } from 'fastify';
import resPrompt from '../models/response'; 

export default async function indexRoute(fastify: FastifyInstance) {
    fastify.get('/', async (req, res) => {
        try {
            const prompt = await resPrompt.findOne();
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
