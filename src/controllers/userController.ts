import { Request, Response, NextFunction } from "express";
import { IUserByIdParamInput } from "../validations/userValidation"

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
}


export default new UserController;