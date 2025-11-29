"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "../logo.jpeg";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Vendor Registration", path: "/registration" },
  { title: "Profile", path: "/profile" },
];

export default function Header() {

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800
  });


  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const isMobile = windowSize.width < 768;
  const logoSize = isMobile ? "50px" : "7rem";


  return (
    <header style={{ position: "sticky", top: 0, backgroundColor: "white", }}>

      <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5em 1em" }}>

        {/* <h1>VintagePoultry</h1> */}
        <section>
          <img src={logo.src} alt="logo" style={{ width: logoSize, height: logoSize, borderRadius: "50%", boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 8px", transition: "0.2s ease", }} />
        </section>

        <nav className="hidden md:flex space-x-4">
          {navLinks.map(({ title, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 rounded-md ${pathname === path
                ? "bg-yellow-500 text-gray-100"
                : "text-gray-800"
                } hover:bg-yellow-900 hover:text-white`}
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button - Only visible on mobile */}
        <button
          className="md:hidden text-2xl text-yellow-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-2">
          {navLinks.map(({ title, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${pathname === path ? "bg-yellow-500 text-white" : "text-gray-800"
                } hover:bg-yellow-700 hover:text-white transition`}
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
    </header >
  );
}
