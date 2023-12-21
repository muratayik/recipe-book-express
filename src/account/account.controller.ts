import express, { Request, Response, NextFunction } from "express";

import * as AccountService from "./account.service";

const router = express.Router();

router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const registerDTO = req.body;
      const newAccount = await AccountService.register(registerDTO);
      res.status(201).send(newAccount);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const account = await AccountService.login(req.body);
      res.send(account);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);

export default router;
