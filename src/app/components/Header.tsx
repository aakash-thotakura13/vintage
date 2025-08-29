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
      <div className="grid grid-cols-[1fr_1fr] items-center gap-4 px-8 py-4 border-b-2 border-yellow-600">
        <div>
          <h1>VintagePoultry</h1>
        </div>
        <nav className="flex gap-4 justify-end">
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
