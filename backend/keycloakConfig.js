import dotenv from "dotenv";

dotenv.config();

export const keycloakConfig = {
    clientId: "mobile-app",
    bearerOnly: true,
    serverUrl: "http://keycloak:8080",
    realm: "backend",
    credentials: {
      secret: process.env.KEYCLOAK_CLIENT_SECRET
    }
}