import bcrypt from "bcrypt";

export const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

export const comparePasswords = (
  plainPassword: string,
  hashedPassword: string
) => bcrypt.compareSync(plainPassword, hashedPassword);
