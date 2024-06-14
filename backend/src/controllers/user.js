import pool from "../database/pool.js";

export async function createUser(username, password) {
    await pool.query("INSERT INTO users (username, password VALUES (?, ?)", [username, password])
}

export async function getUserByUsername(username) {
    [result] = await pool.query("SELECT * FROM users WHERE username = ?", [username])
    return result[0]
}