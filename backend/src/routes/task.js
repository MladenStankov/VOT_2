import express from "express";
import Keycloak from "keycloak-connect";
import { keycloakConfig } from "../../keycloakConfig.js"
import { createTask, getTasks } from "../controllers/task.js";

const taskRoute = express.Router();

const keycloak = new Keycloak({}, keycloakConfig);

taskRoute.post("/new", keycloak.protect(), async (req, res) => {
    const { title, description, username } = req.body;
    try {
        await createTask(title, description, username)
        res.status(201).json({message: "Created task"})
    } catch (err) {
        res.status(400).json({message: "Failed to create task"})
    }
});

taskRoute.get("/", keycloak.protect(), async (req, res) => {
    const task = await getTasks()
    res.status(200).send(task)
});

export default taskRoute;