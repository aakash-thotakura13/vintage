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
    path: "/profile",
  },
  {
    title: "Order Tracking",
    path: "/profile",
  },
];


export default function Footer() {
  return (
    <footer style={{ backgroundColor: "black", color: "whitesmoke", }}>
      <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0 auto", padding: "1em 0.5em", }}>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "2em", flexWrap: "wrap", alignItems: "flex-start", }}>

          <div style={{ flex: "1 1 350px", }}>
            <h3 className="font-bold text-yellow-500">VintagePoultry</h3>
            <p>Premium quality poultry products delivered fresh from our farm to your table.</p>
          </div>

          <div style={{ flex: "1 1 350px", }}>
            <h3 className="font-bold text-yellow-500">Quick Links</h3>
            {
              footerRoutes.map((entry, id) => <Link href={entry.path} key={id} style={{ display: "block", }}>{entry.title} </Link>)
            }
          </div>

          <div style={{ flex: "1 1 350px", }}>
            <h3 className="font-bold text-yellow-500">Contact Us</h3>
            <address>
              <p><strong>Address: </strong>Vintage Poultry</p>
              <p>5-5-11, Gandi Nagar, Silk Campus,</p>
              <p>Palvancha, 507115</p>
              <p><strong>Mobile: </strong>+91 7893912177</p>
              <p><strong>Email: </strong>nizam.vintage1@gmail.com</p>
            </address>
          </div>

        </div>

      </section>

    </footer>
  )
}