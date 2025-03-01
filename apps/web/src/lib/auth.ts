import { Database } from "bun:sqlite";
import { betterAuth } from "better-auth";
import { oidcProvider } from "better-auth/plugins";

export const auth = betterAuth({
    plugins: [
        oidcProvider({
            metadata: {
                issuer: process.env.BASE_URL,
                authorization_endpoint: `${process.env.BASE_URL}/oauth2/auth`,
                token_endpoint: `${process.env.BASE_URL}/oauth2/token`,
                userInfo_endpoint: `${process.env.BASE_URL}/userinfo`,
            },
            loginPage: "/login",
            allowDynamicClientRegistration: true,
        }),
    ],
    database: new Database("./sqlite.db"),
    emailAndPassword: {
        enabled: true,
    },
});
