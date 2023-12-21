import { AppDataSource } from "../config/data-source";
import { Account } from "./account.entity";

const createRepository = () => AppDataSource.getRepository(Account);

export const createAccount = (
  email: string,
  username: string,
  password: string,
  role: string
) => {
  const accountRepository = createRepository();
  const account = accountRepository.create();

  account.email = email;
  account.username = username;
  account.password = password;
  account.role = role;

  return accountRepository.save(account);
};

export const getAccount = (email: string) =>
  createRepository().findOneBy({ email });
