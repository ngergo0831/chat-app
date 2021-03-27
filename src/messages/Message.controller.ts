import { Request, Response } from "express";
import { Message } from "./Message.entity";

export async function list(req: Request, res: Response) {
  const userId = (req as any).userId as number;
  res.json(
    await Message.find({
      where: { receiverId: userId },
      order: { sentAt: "DESC" },
    })
  );
}
