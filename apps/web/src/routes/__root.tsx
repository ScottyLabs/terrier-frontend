import { Theme } from "@radix-ui/themes";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "~/components/navbar";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <Theme>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </Theme>
    );
}
