"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, fastify_1.default)({ logger: true });
//connect to db
mongoose_1.default.connect('mongodb://127.0.0.1:27017/crud')
    .then(() => {
    app.log.info("BD Connected yey");
}).catch(() => {
    app.log.error("Not Connected");
});
//routes
app.register(index_1.default);
const start = () => {
    try {
        app.listen({ port: 8080 });
        app.log.info("Running on http://localhost:8080");
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map