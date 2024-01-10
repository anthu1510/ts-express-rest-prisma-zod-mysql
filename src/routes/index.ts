import { Application } from "express"
import userRouter from "./user.router"

export const routes = (app: Application) => {
    app.use("/api/users", userRouter)
}