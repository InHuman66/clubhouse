import Link from "next/link";

export default function Room() {
    return (
        <div>
            <h1>Room</h1>
            <Link href={'/'}>
                <a>Go to Home Page</a>
            </Link>
        </div>
    )
}