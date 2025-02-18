import "dotenv/config"
import express from "express";
import todoRouter from "./presentation/controller/todo.js";

const app = express();

app.use(express.json());
app.use("/todo", todoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app running on port:", PORT);
});