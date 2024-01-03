import { Request, Response, NextFunction } from "express";
import { IUserByIdParamInput, IUserCreateInput, IUser } from "../validations/userValidation"
import { db } from "../database";

class UserController {
    async getAll(req: Request, res: Response<IUser[]>, next: NextFunction) {
        try {
            const users = await db.users.findMany({});
            res.json(users)
        }
        catch (ex) {
            next(ex);
        }

    }
    getById(req: Request<IUserByIdParamInput>, res: Response<{ message: string }>, next: NextFunction) {
        try {
            res.json({
                message: `test user controller  ${req.params.id}`
            })
        }
        catch (ex) {
            next(ex);
        }

    }
    async create(req: Request<IUserCreateInput>, res: Response<{ message: string }>, next: NextFunction) {
        try {
            const userInput = req.body;
            await db.users.create({ data: userInput })
            res.json({
                message: `user Created`
            })
        }
        catch (ex) {
            next(ex);
        }
    }
}


export default new UserController;