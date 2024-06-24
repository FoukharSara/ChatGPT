"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//FastifyInstance to catxh errors and stuff with typing such us fastify.gte(....) wouldnt give us an eror if not for fastifyInstance
async function indexRoute(fastify) {
    fastify.get('/', (req, res) => {
        res.send("hello");
    });
}
exports.default = indexRoute;
//# sourceMappingURL=index.js.map