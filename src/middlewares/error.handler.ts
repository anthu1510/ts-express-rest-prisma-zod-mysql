import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) { 
        return next(err) 
      } 

      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(403).json({ error: err })
      }

      res.status(500).json({ error: err })
}