"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function indexRoute(fastify) {
    fastify.get('/', (req, res) => {
        res.send("hello");
    });
}
exports.default = indexRoute;
//# sourceMappingURL=index.js.map