import fastify from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { promptHandler } from "./src/routes";

dotenv.config();

const app = fastify({
  logger: true,
});

const { DB_USER, DB_PASSWORD,DB_NAME, DB_PORT, API_PORT ,NODE_ENV } =
  process.env;

export async function connect(): Promise<any> {
  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}/${DB_NAME}`,
    {
      socketTimeoutMS: 480000,
    }
  );
}
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
app.post("/", promptHandler);

const options = {
  port: parseInt(API_PORT ?? "3000"),
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