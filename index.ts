import express, { Application } from "express";
import { Mainapp } from "./Mainapp";
import { dbConfig } from "./config/db";

const app: Application = express();
Mainapp(app);
dbConfig();

const server = app.listen(5000, () => {
  console.log(" Judith server is up and running");
});

process.on("uncaughtException", (err: Error) => {
  console.log("shutting down");
  console.log(err);
  process.exit(1);
});
process.on("unhandledRejection", (reason: Error) => {
  console.log("shutting down :unhandledRejection");
  console.log(reason);
  process.exit(1);
});
