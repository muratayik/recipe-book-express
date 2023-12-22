import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../error/custom.error";

import * as JwtUtils from "../utils/jwt.utils";

export const extractAccountInfoFromToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    throw new UnauthorizedError("Token is missing in header!");
  } else {
    const tokenData = authorizationHeader?.split(" ")[1];
    const email = JwtUtils.verifyTokenAndReturnEmail(tokenData);
    req.email = email;
    next();
  }
};
