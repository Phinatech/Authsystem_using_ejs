import { Request, Response } from "express";

export const registerCompany = (req: Request, res: Response) => {
  try {
    const {} = req.body;
  } catch (error) {
    res.status(200).json({
      message: "Failed to register",
    });
  }
};
