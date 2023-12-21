import * as AccountRepository from "./account.repository";
import { LoginDTO } from "./dto/login.dto";
import { RegisterDTO } from "./dto/register.dto";

import bcrypt from "bcrypt";

export const register = async (registerDTO: RegisterDTO) => {
  const { email, password, username } = registerDTO;

  const accountWithSameEmail = await AccountRepository.getAccount(email);
  if (accountWithSameEmail) {
    throw new Error("An account with this email already exists!!!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // TODO : find roles from env file
  const role = "user";

  const newAccount = await AccountRepository.createAccount(
    email,
    username,
    hashedPassword,
    role
  );

  return newAccount;
};

export const login = async (loginDTO: LoginDTO) => {
  const { email, password } = loginDTO;

  const account = await AccountRepository.getAccount(email);
  if (!account) {
    throw new Error("An account with this email not found!!!");
  }

  const passwordsMatch = await bcrypt.compare(password, account.password);
  if (!passwordsMatch) {
    throw new Error("Invalid Credentials!!!");
  }

  return account;
};
