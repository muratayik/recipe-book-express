import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "../error/custom.error";

class ExtendedPayload implements JwtPayload {
  email: string;
}

export const sign = (email: string) => {
  const secret = process.env.TOKEN_SECRET!;

  const token = jwt.sign({ email }, secret, {
    expiresIn: "24h",
  });

  return token;
};

export const verifyTokenAndReturnEmail = (token: string) => {
  const secret = process.env.TOKEN_SECRET!;
  try {
    const decoded = jwt.verify(token, secret) as ExtendedPayload;
    return decoded.email;
  } catch {
    throw new UnauthorizedError("Invalid Token!");
  }
};
