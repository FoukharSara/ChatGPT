"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//FastifyInstance to catxh errors and stuff with typing such us fastify.gte(....) wouldnt give us an eror if not for fastifyInstance
function indexRoute(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/', (req, res) => {
            res.send("hello");
        });
    });
}
exports.default = indexRoute;
//# sourceMappingURL=index.js.map