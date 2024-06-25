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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, fastify_1.default)({
    logger: true,
});
const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`, {
            socketTimeoutMS: 480000,
        });
    });
}
exports.connect = connect;
connect()
    .then(() => {
    console.log(`Database running at port 27017`);
})
    .catch((err) => {
    console.log("Failed to connect to database");
    console.error(err);
    process.exit(1);
});
//route
app.register(index_1.default);
const { API_PORT, NODE_ENV } = process.env;
const options = {
    port: parseInt(API_PORT !== null && API_PORT !== void 0 ? API_PORT : "3000"),
    host: "0.0.0.0",
};
app.listen(options, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Worker ${process.pid} started`);
    console.log(`Api running at ${address}`);
    console.log(`Started at ${new Date()}`);
    console.log(`Environment => ${NODE_ENV}`);
});
//# sourceMappingURL=app.js.map