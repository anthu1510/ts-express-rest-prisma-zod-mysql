import { Router } from "express";
import { validateRequest } from 'zod-express-middleware';
import userController from "../controllers/user.controller";
import { userCreateInput } from "../schema";

const router = Router();

router.post("/", validateRequest({body: userCreateInput}), userController.create);
router.get("/", userController.show);


export default router;