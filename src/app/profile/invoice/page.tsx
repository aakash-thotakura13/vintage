"use client";
import { useEffect, useState } from "react";
import Heading from "@/app/components/Heading";
import Description from "@/app/components/Description";
import { useUser } from "@/app/context/UserContext";
import { Vendor } from "@/types/Types"


export default function InvoicePage() {

  const [vendorData, setVendorData] = useState<Vendor | null>(null);
  const { user, setUser } = useUser();

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


  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return { bg: "#fbbf24", text: "#1f2937" }; // yellow bg + dark gray text
      case "processing":
        return { bg: "#3b82f6", text: "#ffffff" };
      case "shipped":
        return { bg: "#6366f1", text: "#ffffff" };
      case "delivered":
        return { bg: "#22c55e", text: "#ffffff" };
      case "cancelled":
        return { bg: "#ef4444", text: "#ffffff" };
      default:
        return { bg: "#6b7280", text: "#ffffff" };
    }
  };




  return (
    <section>
      <Heading title="Invoice Management" />
      <Description title="Download and manage your invoices for tax and accounting purposes." />


      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1em",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          justifyContent: "center",
        }}
      >
        {vendorData.orders.map((order, id) => {
          const { bg, text } = getStatusStyles(order.status);


          return (
            <section
              key={id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "1em",
                padding: "1.2em",
                flex: "1 1 350px",
                minWidth: "350px",
                maxWidth: "380px",
                background: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ marginBottom: "0.5em" }}>
                <p style={{ fontSize: "0.9em", color: "#6b7280" }}>
                  Order Date:
                </p>
                <p style={{ fontWeight: "600" }}>
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>

              <p style={{ margin: "0.3em 0", fontSize: "1em" }}>
                <strong>Total Amount:</strong>{" "}
                <span style={{ color: "#111827" }}>
                  ₹ {order.totalAmount.toFixed(2)}
                </span>
              </p>

              <p style={{ margin: "0.3em 0", display: "flex", alignItems: "center" }}>
                <strong>Status:</strong>
                <span
                  style={{
                    background: bg,
                    color: text,
                    padding: "0.2em 0.7em",
                    borderRadius: "1em",
                    marginLeft: "0.5em",
                    fontSize: "0.85em",
                    fontWeight: "600",
                  }}
                >
                  {order.status}
                </span>
              </p>

              <h3 style={{ marginTop: "1em", fontSize: "1.1em" }}>Products:</h3>
              <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
                {order.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.4em" }}>
                    <span style={{ fontWeight: 500 }}>{item.productName}</span>{" "}
                    <br />
                    <span style={{ color: "#6b7280", fontSize: "0.9em" }}>
                      Qty: {item.quantity}
                      &nbsp;•&nbsp; Price: ₹ {item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </section>


    </section>
  )
}