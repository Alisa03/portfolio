import Link from "next/link";

import { Button } from "@/shared/ui";

export default function NotFoundPage() {
    return (
        <main style={{ padding: "30px 0", flexDirection: "column" }} className="block container flex-center">
            <h1 style={{ fontSize: "10rem", letterSpacing: "2vw" }}>404</h1>
            <Button component={Link} className="section__text" href='/'>Home</Button>
        </main>
    )
}
