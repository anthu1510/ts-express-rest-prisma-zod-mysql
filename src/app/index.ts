import express, { Application } from "express";
import userRoutes from "../routes/userRouter"
import { errorHandler } from "../middlewares/errorHandler";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '1mb' }))

app.use("/api/users", userRoutes)

app.use(errorHandler)

export default app;