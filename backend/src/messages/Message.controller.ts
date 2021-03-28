import { Request, Response } from "express";
import { Message } from "./Message.entity";

export async function list(req: Request, res: Response) {
    const userId = (req as any).userId as number;   
    res.json(
        await Message.find({
            where: { recieverId: userId },
            order: { sentAt: "DESC" },
        })
    );
}

export async function show(req: Request, res: Response) {
    const userId = (req as any).userId as number;    
    res.json(
        await Message.findOne({
            where: { recieverId: userId, id: req.params.messageId },
        })
    );
}
