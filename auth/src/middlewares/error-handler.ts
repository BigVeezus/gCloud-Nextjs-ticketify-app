import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("handling this error as a Request Validation error");
  }

  if (err instanceof DatabaseConnectionError) {
    console.log("Handling this error as a db connection error g");
  }

  res.status(400).send({
    message: err.message,
  });
};
