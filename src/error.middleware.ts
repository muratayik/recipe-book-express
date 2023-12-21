import { Request, Response, NextFunction } from "express";
import { CustomError } from "./config/custom.error";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.message);
  }

  if (err.message) {
    return res.status(500).send(err.message);
  }

  return res.status(500).send("Something went wrong!");
};

export default errorHandler;
