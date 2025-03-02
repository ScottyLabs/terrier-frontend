import { Link } from "@tanstack/react-router";

export const Navbar = () => {
    return (
        <>
            <nav className="p-2 flex gap-2 text-lg">
                <Link
                    to="/"
                    activeProps={{
                        className: "font-bold",
                    }}
                    activeOptions={{ exact: true }}
                >
                    Home
                </Link>
            </nav>
            <hr />
        </>
    );
};
