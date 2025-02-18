import { Router } from "express";
import { todoService } from "../../domain/service/todo.js";

const router = Router();

router.get("/", async (_,res) => {
    console.log("GET /");
    try {
        const todos = await todoService.findAll();
        res.status(200).json(todos);
    } catch (ex) {
        console.error(ex);
        res.status(500).json();
    }
})

router.post("/", async (req,res) => {
    console.log("POST /");
    console.log("body: ", req.body);

    const todo = req.body;

    if (!todo.title) {
        return res.status(400).json({ message: "field title is required" });
    }

    if (!todo.description) {
        return res.status(400).json({ message: "field description is required" });
    }
    
    try {
        const result = await todoService.add(todo);
        res.status(201).json(result);
    } catch (ex) {
        console.error(ex);
        res.status(500).json();
    }
});

router.put("/:id", async (req,res) => {
    console.log("PUT /", req.params.id);
    console.log("body: ", req.body);

    try {
        const todo = await todoService.update(req.params.id, req.body);
        res.status(200).json(todo);
    } catch (ex) {
        console.error(ex);
        res.status(500).json();
    }
});

router.delete("/:id", async (req,res) => {
    console.log("DELETE /", req.params.id);
    try {
        await todoService.delete(req.params.id);
        res.status(200).json();
    } catch (ex) {
        console.error(ex);
        res.status(500).json();
    }
});

export default router;