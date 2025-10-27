
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosCart } from "react-icons/io";
import { useCart } from "../context/CartContext";

const navLinks = [
  { title: "Products", path: "/profile/orders" },
  { title: "Invoice", path: "/profile/invoice" },
  // { title: "Settings", path: "/profile/settings" },
  { title: <IoIosCart style={{ fontSize: "1.5em" }} />, path: "/profile/cart" },
];


export default function VendorDashboard() {

  const pathname = usePathname();

  const { cartItems, addToCart, removeFromCart, getCountsMap } = useCart();
  const countsMap = getCountsMap();

  return (
    <nav className="flex gap-4 justify-around" style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", padding: "0em", position: "sticky", top: 0, backgroundColor: "white", padding: "0.5em 0em", }}>
      {navLinks.map(({ title, path }) => (
        <Link
          key={path}
          href={path}
          className={`px-3 py-1 rounded-md ${pathname === path ? "bg-yellow-500 text-gray-100" : "text-gray-800"} hover:bg-yellow-900 hover:text-white`}
        >
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {
              path === "/profile/cart" && Object.keys(countsMap)?.length
                ? <strong>To Cart</strong>
                : ""
            }
            {title}
            {
              path === "/profile/cart" && Object.keys(countsMap)?.length
                ? <div style={{ width: "7px", aspectRatio: "1/1", borderRadius: "50%", fontSize: "0.75em" }}>{Object.keys(countsMap)?.length}</div>
                : ""
            }
          </div>
        </Link>
      ))}
    </nav>
  )
};