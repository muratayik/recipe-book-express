import * as AccountRepository from "./account.repository";
import * as JwtUtils from "../utils/jwt.utils";
import * as BcryptUtils from "../utils/bcrypt.utils";
import { LoginDTO } from "./dto/login.dto";
import { RegisterDTO } from "./dto/register.dto";
import { VerifyDTO } from "./dto/verify.dto";
import { Account } from "./account.entity";
import { AuthResponse } from "./dto/auth-response.dto";

export const register = async (registerDTO: RegisterDTO) => {
  const { email, password, username } = registerDTO;

  const accountWithSameEmail = await AccountRepository.getAccount(email);
  if (accountWithSameEmail) {
    throw new Error("An account with this email already exists!!!");
  }

  const hashedPassword = BcryptUtils.hashPassword(password);

  // TODO : find roles from env file
  const role = "user";

  const newAccount = await AccountRepository.createAccount(
    email,
    username,
    hashedPassword,
    role
  );

  return generateAuthReponse(newAccount);
};

export const login = async (loginDTO: LoginDTO) => {
  const { email, password } = loginDTO;

  const account = await AccountRepository.getAccount(email);
  if (!account) {
    throw new Error(`Account with email ${email} not found!`);
  }

  const passwordsMatch = BcryptUtils.comparePasswords(
    password,
    account.password
  );
  if (!passwordsMatch) {
    throw new Error("Invalid Credentials!!!");
  }

  return generateAuthReponse(account);
};

export const verifyToken = async (verifyDTO: VerifyDTO) => {
  const { token } = verifyDTO;
  const email = JwtUtils.verifyTokenAndReturnEmail(token);

  const account = await AccountRepository.getAccount(email);

  if (!account) {
    throw new Error(`Account with email ${email} not found!`);
  }

  return generateAuthReponse(account, token);
};

const generateAuthReponse = (
  account: Account,
  generatedToken = ""
): AuthResponse => {
  const { email, username, role } = account;

  const token = !!generatedToken ? generatedToken : JwtUtils.sign(email);

  return {
    email,
    role,
    username,
    token,
  };
};
