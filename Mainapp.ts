import express, { Application, Request, Response } from "express";
import cors from "cors";
import ejs from "ejs";
const data = {
  name: "peter",
  matID: "",
  color: "red",
};

export const Mainapp = (app: Application) => {
  app.set("view engine", "ejs");
  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.static(`${__dirname} "./public/assset`));
  app.use(express.static(`${__dirname} "./public/css`));
  app.use(cors());

  app.get("/view", (req: Request, res: Response) => {
    res.render("index", { data });
  });

  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Done" });
  });
};
