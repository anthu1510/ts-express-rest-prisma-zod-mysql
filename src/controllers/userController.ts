import { Request, Response, NextFunction } from "express";
import { IUserByIdParamInput, IUserCreateInput } from "../validations/userValidation"
import { db } from "../database";

class UserController {
    getAll(req: Request, res: Response<{ message: string }>, next: NextFunction) {
        try {
            res.json({
                message: "test user controller"
            })
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