import { FastifyInstance } from 'fastify';
//FastifyInstance to catxh errors and stuff with typing such us fastify.gte(....) wouldnt give us an eror if not for fastifyInstance
export default async function indexRoute(fastify: FastifyInstance) {
  fastify.get('/',  (req, res) => {
    res.send("hello");
  });
}
