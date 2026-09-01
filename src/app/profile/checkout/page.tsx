"use client";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Tell TypeScript about the Razorpay global loaded via script
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { cartItems, getCountsMap, clearCart } = useCart();
  const router = useRouter();
  const countsMap = getCountsMap();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = Object.values(countsMap).reduce(
    (sum: number, item) => sum + item.price * item.count,
    0
  );

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/customer/invoice");
    }
  }, [cartItems, router]);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function handlePayment() {
    setIsProcessing(true);
    console.log("Step 1 - handlePayment triggered");
    console.log("Total price:", totalPrice);
    console.log("Razorpay key:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);

    try {
      // Step 1 — Create Razorpay order from backend
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });
      const orderData = await orderRes.json();
      console.log("Step 2 - Order created:", orderData);


      if (!orderData.success) {
        alert("❌ Failed to initiate payment. Please try again.");
        setIsProcessing(false);
        return;
      }

      console.log("Step 3 - Opening Razorpay popup");
      console.log("Window.Razorpay available:", typeof window.Razorpay);


      // Step 2 — Open Razorpay popup
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: "INR",
        name: "VintagePoultry",
        description: "Order Payment",
        order_id: orderData.order.id,

        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          // Step 3 — Verify payment on backend
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            // Step 4 — Place the order in your DB
            await fetch("/api/order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items: Object.values(countsMap).map((item) => ({
                  productName: item.name,
                  quantity: item.count,
                  price: item.price,
                })),
                totalAmount: totalPrice,
                paymentId: verifyData.paymentId,
              }),
            });

            clearCart();
            alert("✅ Payment successful! Order placed.");
            router.push("/customer/orders");
          } else {
            alert("❌ Payment verification failed. Contact support.");
          }
        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        theme: {
          color: "#f59e0b", // yellow-500 to match your theme
        },

        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("❌ Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  }

  return (
    <section style={{ maxWidth: "800px", minWidth: "350px", margin: "2em auto", padding: "1em" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>Checkout</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.values(countsMap).map((item) => (
          <li key={item.id} style={{ marginBottom: "1em" }}>
            <strong>{item.name}</strong> × {item.count} — ₹{(item.count * item.price).toFixed(2)}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2em" }}>
        <p style={{ fontWeight: "bold" }}>Total Amount: ₹ {totalPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        style={{
          marginTop: "2em",
          padding: "0.75em 2em",
          backgroundColor: isProcessing ? "#9ca3af" : "#f59e0b",
          color: "white",
          borderRadius: "0.5em",
          cursor: isProcessing ? "not-allowed" : "pointer",
          fontWeight: "bold",
          fontSize: "1em",
        }}
      >
        {isProcessing ? "Processing..." : "Pay ₹ " + totalPrice.toFixed(2)}
      </button>
    </section>
  );
}