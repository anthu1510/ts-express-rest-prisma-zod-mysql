import { Router } from "express";
import { validateRequest } from 'zod-express-middleware';
import { UserByIdParamInput, UserCreateInput } from "../validations/userValidation";
import userController from "../controllers/userController";

const router = Router();

router.get("/", userController.getAll)
router.get("/:id", validateRequest({ params: UserByIdParamInput }), userController.getById)
router.post("/", validateRequest({ body: UserCreateInput }), userController.create)


export default router;