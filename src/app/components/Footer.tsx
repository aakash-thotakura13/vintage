import Link from "next/link"

const footerRoutes = [
  {
    title: "Our Products",
    path: "/",
  },
  {
    title: "Farm Practices",
    path: "/",
  },
  {
    title: "Quality Standards",
    path: "/",
  },
  {
    title: "Vendor Portal",
    path: "/",
  },
  {
    title: "Order Tracking",
    path: "/",
  },
]
export default function Footer() {
  return (
    <footer>
      <section style={{ width: "80%", margin: "1.5em auto", display: "flex", justifyContent: "space-around", gap: "2em", }}>

        <div style={{ flex: "1 1 0", }}>
          <h3 className="font-bold text-yellow-500">VintagePoultry</h3>
          <p>Premium quality poultry products delivered fresh from our farm to your table.</p>
        </div>

        <div style={{ flex: "1 1 0", }}>
          <h3 className="font-bold text-yellow-500">Quick Links</h3>
          {
            footerRoutes.map((entry, id) => <Link href={entry.path} key={id} style={{ display: "block", }}>{entry.title} </Link>)
          }
        </div>

        <div style={{ flex: "1 1 0", }}>
          <h3 className="font-bold text-yellow-500">Contact Us</h3>
          <address>
            <p>123 Vintage Poultry Lane</p>
            <p>Kothegudem, Palvoncha</p>
            <p>(123) 456-7890</p>
            <p>contact@vintagePoultry.com</p>
          </address>
        </div>
      </section>

      <p className="text-center py-8 border-t-2 border-gray-300">© 2024 VintagePoultry. All rights reserved.</p>

    </footer>
  )
}