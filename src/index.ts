import * as Http from "http";
import app from "./app"

const server = Http.createServer(app);
const port: number = 5000;

server.listen(port, () => {
    console.log(`server started at ${port}`);
})