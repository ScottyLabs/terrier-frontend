import { createReactQueryApi } from "./client";

export function createGatewayApi(baseUrl: string, client: string) {
    async function logout() {
        const logoutUrl = `${baseUrl}/logout`;
        const form = document.createElement("form");
        form.method = "POST";
        form.action = logoutUrl;
        document.body.appendChild(form);
        form.submit();
    }

    async function login() {
        const loginUrl = `${baseUrl}/oauth2/authorization/${client}?redirect_uri=${encodeURIComponent(window.location.href)}`;
        window.location.href = loginUrl;
    }

    const $api = createReactQueryApi(baseUrl);

    return {
        login,
        logout,
        $api,
    };
}
