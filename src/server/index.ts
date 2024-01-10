import http from "http"
import app from "../app"

const server = http.createServer(app);
const port: number = 5000;

server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})