
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { title: "Orders", path: "/profile/orders" },
  { title: "Invoice", path: "/profile/invoice" },
  { title: "Settings", path: "/profile/settings" },
];


export default function VendorDashboard() {

  const pathname = usePathname();

  return (
    <nav className="flex gap-4 justify-around" style={{ position: "sticky", top: 0, backgroundColor: "white", borderBottom: "2px solid goldenrod", padding: "0.5em 0em", }}>
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
  )
};