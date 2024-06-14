import express from "express"
import bodyParser from "body-parser"
import session from "express-session"
import Keycloak from "keycloak-connect"
import dotenv from "dotenv" 
import { keycloakConfig } from "./keycloakConfig.js"
import { taskRoute } from "./src/routes/task.js"
import { authRoute } from "./src/routes/authentication.js"

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(bodyParser.json());

const memoryStore = new session.MemoryStore()
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}))

const keycloak = new Keycloak({store: memoryStore}, keycloakConfig)

app.use(keycloak.middleware())
app.use("/task", taskRoute)
app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}...`)
})