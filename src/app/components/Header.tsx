"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Vendor Registration", path: "/registration" },
  { title: "Profile", path: "/profile" },
];

export default function Header() {

  const pathname = usePathname();

  return (
    <header style={{ position: "sticky", top: 0, backgroundColor: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5em 1em" }}>
        <div>
          <h1>VintagePoultry</h1>
        </div>
        <nav>
          {navLinks.map(({ title, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 rounded-md ${pathname === path ? "bg-yellow-500 text-gray-100" : "text-gray-800"} hover:bg-yellow-900 hover:text-white`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
