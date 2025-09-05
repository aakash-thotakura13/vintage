import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";

const invoices = [
  {
    invoiceNumber: "INV-001-2024",
    orderNumber: "ORD-001",
    date: "2024-01-15",
    billedAmount: 649.50,
    paidAmount: 649.50,
    deliveryStatus: "Delivered",
  },
  {
    invoiceNumber: "INV-002-2024",
    orderNumber: "ORD-002",
    date: "2024-01-22",
    billedAmount: 574.25,
    paidAmount: 574.24,
    deliveryStatus: "In Transit",
  },
  {
    invoiceNumber: "INV-001-2024",
    orderNumber: "ORD-001",
    date: "2024-01-15",
    billedAmount: 649.50,
    paidAmount: 649.50,
    deliveryStatus: "Delivered",
  },
  {
    invoiceNumber: "INV-002-2024",
    orderNumber: "ORD-002",
    date: "2024-01-22",
    billedAmount: 574.25,
    paidAmount: 574.24,
    deliveryStatus: "In Transit",
  },
  {
    invoiceNumber: "INV-001-2024",
    orderNumber: "ORD-001",
    date: "2024-01-15",
    billedAmount: 649.50,
    paidAmount: 649.50,
    deliveryStatus: "Delivered",
  },
  {
    invoiceNumber: "INV-002-2024",
    orderNumber: "ORD-002",
    date: "2024-01-22",
    billedAmount: 574.25,
    paidAmount: 574.24,
    deliveryStatus: "In Transit",
  },
]

export default function InvoicePage() {
  return (
    <section>
      <Heading title="Invoice Management" />
      <Description title="Download and manage your invoices for tax and accounting purposes." />

      <section style={{ width: "57%", minWidth: "350px", margin: "1em auto", display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "space-around", }}>
        {
          invoices.map((invoice, id) => {
            return (
              <section key={id} style={{ border: "1px solid lightgrey", borderRadius: "1em", padding: "1em", flex: "1 1 350px", minWidth: "350px", }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <h1>{invoice.invoiceNumber}</h1>
                  <>{invoice.billedAmount - invoice.paidAmount === 0
                    ? <small style={{ fontWeight: "500", backgroundColor: "#00FF0044", textShadow: "0px 0px 10px #00FF00", borderRadius: "0.5em", padding: "0.25em 0.5em" }}>Paid</small>
                    : <small style={{ fontWeight: "500", backgroundColor: "#FFFF0044", textShadow: "0px 0px 10px #FFFF00", borderRadius: "0.5em", padding: "0.25em 0.5em" }}>Pending</small>}</>
                </div>
                <h2>{invoice.orderNumber}</h2>
                <p>Date: {invoice.date}</p>
                <p>Amount: {invoice.billedAmount}</p>
                <p>Status: {invoice.deliveryStatus}</p>
                <button style={{ backgroundColor: "goldenrod", color: "white", padding: "0.5em 1em", borderRadius: "0.5em" }}>Download PDF</button>
              </section>
            )
          })
        }
      </section>

    </section>
  )
}