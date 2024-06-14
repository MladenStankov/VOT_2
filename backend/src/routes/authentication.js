import express from "express"
import Keycloak from "keycloak-connect"
import jwt from "jsonwebtoken"
import { keycloakConfig } from "../../keycloakConfig.js"

const authRoute = express.Router()

const keycloak = new Keycloak({}, keycloakConfig)

authRoute.post("/login", async (req, res) => {
    const {username, password} = req.body
    keycloak.grantManager.obtainDirectly(username, password).then((grant) => {
        const token = jwt.decode(grant.access_token)
        const userID = token.sub
        const name = token.name
        const username = token.preferred_username

        res.status(200).json({id: userID, username: username, name: name})
    })
    .catch((err) => {
        console.log(err)
        res.status(401).json({message: "Failed to login"})
    })
})

authRoute.post("/register", async (req, res) => {
    // not implemented
})

export default authRoute