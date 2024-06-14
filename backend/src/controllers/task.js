import pool from "../database/pool";

export async function createTask(title, description, username) {
    await pool.query("INSERT INTO tasks (title, description, username) VALUES (?, ?, ?)",
         [title, description, username])
}

export async function getTasks() {
    [result] = pool.query("SELECT * FROM tasks")
    return [result]
}

export async function getTasksByID(id) {
    [result] = pool.query("SELECT * FROM tasks WHERE id = ?", [id])
    return result[0]
}