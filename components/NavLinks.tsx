"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "London", href: "/weather/London" },
    { name: "Boston", href: "/weather/Boston" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center gap-4 bg-sky-900 p-4">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-lg px-3 py-1 ${
                        pathname === link.href ? "bg-yellow-400 text-black" : "text-white hover:bg-sky-700"
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}