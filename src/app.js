import express from "express"
import router from "./routes/index.router.js";
const app = express();

//middlewares

app.use(express.json());
app.use("/", router);

export default app;