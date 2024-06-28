import fastify from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { indexHandler } from "./src/routes";
import { indexHandler } from "./src/routes";

dotenv.config();

const app = fastify({
  logger: true,
  logger: true,
});

const { DB_USER, DB_PASSWORD, DB_PORT, API_PORT ,NODE_ENV } =
  process.env;

export async function connect(): Promise<any> {
  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}`,
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
  .then(() => {
    console.log(`Database running at port 27017`);
  })
  .catch((err) => {
    console.log("Failed to connect to database");
    console.error(err);
    process.exit(1);
  });



//route
app.get("/", indexHandler);
app.get("/", indexHandler);

const options = {
  port: parseInt(API_PORT ?? "3000"),
  host: "0.0.0.0",
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
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Worker ${process.pid} started`);
  console.log(`Api running at ${address}`);
  console.log(`Started at ${new Date()}`);
  console.log(`Environment => ${NODE_ENV}`);
});
