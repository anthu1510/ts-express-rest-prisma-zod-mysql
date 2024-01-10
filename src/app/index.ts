import  express, {Application} from "express";
import { routes } from "../routes";
import { errorHandler } from "../middlewares/error.handler";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '1mb'}))

//routes
routes(app);


//handle errors
app.use(errorHandler);

export default app;