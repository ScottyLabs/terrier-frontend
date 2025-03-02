import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "@radix-ui/themes/styles.css";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BASE_URL: string;
        }
    }
}

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

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<RouterProvider router={router} />);
}
