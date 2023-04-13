import express, { Application, Request, Response } from "express";
import cors from "cors";
import ejs from "ejs";
const data = {
  name: "peter",
  matID: "",
  color: "red",
};

export const Mainapp = (app: Application) => {
  app
    .set("view engine", "ejs")
    .use(express.json())
    .use(express.static("public"))
    .use(express.static(`${__dirname} "./public/assset`))
    .use(express.static(`${__dirname} "./public/css`))
    .use(cors());

  app.get("/view", (req: Request, res: Response) => {
    res.render("index", { data });
  });

  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Done" });
  });
};
