import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

// biome-ignore lint/style/noNonNullAssertion: guaranteed to exist
const rootElement = document.getElementById("app")!;

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <TanStackRouterDevtools router={router} />
        </>
    );
}

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
