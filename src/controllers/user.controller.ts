import { Request, Response, NextFunction } from "express";
import {  IUser, IUserCreateInput, IUsers } from "../schema";
import { db } from "../database";
import hashPwd from "password-hash";

class UserController {
    async create(req: Request<IUserCreateInput>, res: Response<IUser>, next: NextFunction) {
       try {
        const userData: IUserCreateInput = req.body;
        const user = await db.users.create({ data: {...userData, password: hashPwd.generate(userData.password)}});
        res.json(user)
       } catch (err) {
        next(err)
       }
    }
    async show(req: Request, res: Response<IUsers>, next: NextFunction) {
        try {
            const user = await db.users.findMany({ });
            res.json(user)
           } catch (err) {
            next(err)
           }
       
    }
}

export default new UserController();