import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "~/lib/auth-client";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    const session = useSession();

    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    );
}
