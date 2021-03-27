import { Request, Response } from "express";
import { User } from "./User.entity";
import * as crypto from "crypto";

export async function register(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json("Name is mandatory.");
  }

  if (!req.body.email) {
    return res.status(400).json("Email is mandatory.");
  }

  if (!req.body.password) {
    return res.status(400).json("Password is mandatory.");
  }

  const user = User.create(req.body as Object);

  user.password = crypto
    .createHash("sha512")
    .update(user.password)
    .digest("hex");

  await user.save();

  res.json(user);
}
