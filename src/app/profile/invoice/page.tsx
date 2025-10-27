"use client";
import { useEffect, useState } from "react";
import Heading from "@/app/components/Heading";
import Description from "@/app/components/Description";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";

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

  const [loading, setLoading] = useState(true);

  const { user, setUser } = useUser();

  type OrderItem = {
    productName: string;
    quantity: number;
    price: number;
  };

  type Order = {
    _id: string;
    items: OrderItem[];
    totalAmount: number;
    status: string;
    orderDate: string;
    createdAt?: string;
    updatedAt?: string;
  };

  type Vendor = {
    _id: string;
    businessAddress: string;
    businessDescription: string;
    businessName: string;
    businessType: string;
    city: string;
    contactPersonName: string;
    createdAt: string;
    emailAddress: string;
    orders: Order[]; // ✅ array of Order objects
    password: string;
    pinCode: string;
    state: string;
    termsAndConditions: boolean;
    updatedAt: Date;
    username: string;
  };

  const [vendorData, setVendorData] = useState<Vendor | null>(null);

  useEffect(() => {

    if (!user?.username) return;

    const username = user.username;

    async function fetchVendor() {
      const res = await fetch(`/api/vendor/${username}`);
      const data = await res.json();
      if (data.success) setVendorData(data.vendor);
    }

    fetchVendor();
  }, [user]);

  if (!vendorData) return <p>Loading...</p>;

  vendorData.orders.forEach(order => {
    console.log(order.items);
  });


  return (
    <section>
      <Heading title="Invoice Management" />
      <Description title="Download and manage your invoices for tax and accounting purposes." />

      <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto 1em", padding: "0em", display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "space-around", }}>
        {
          vendorData.orders.map((order, id) => {
            return (
              <section key={id} style={{ border: "1px solid lightgrey", borderRadius: "1em", padding: "1em", flex: "1 1 350px", minWidth: "350px", }}>
                {/* <h2>Order ID: {order._id}</h2> */}
                <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                <p>Total Amount: ₹ {order.totalAmount.toFixed(2)}</p>
                <p>Status: {order.status}</p>
                {/* <h3>Items:</h3> */}
                {/* <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.productName} - Quantity: {item.quantity} - Price: ₹ {item.price.toFixed(2)}
                    </li>
                  ))}
                </ul> */}
              </section>
            )
          })
        }
      </section>

      <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", padding: "0em", display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "space-around", }}>
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