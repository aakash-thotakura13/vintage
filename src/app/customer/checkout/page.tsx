"use client";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutPage() {
  const { cartItems, getCountsMap, clearCart } = useCart();
  const { user } = useUser();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const countsMap = getCountsMap();
  const cartList = Object.values(countsMap);

  const totalPrice = cartList.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  useEffect(() => {
    if (cartItems.length === 0 && !paymentSuccess) {
      router.push("/customer/cart");
    }
  }, [cartItems, router, paymentSuccess]);

  async function handlePayment() {
    setIsProcessing(true);

    // Step 1 — Load Razorpay script
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("❌ Failed to load Razorpay. Check your internet connection.");
      setIsProcessing(false);
      return;
    }

    // Step 2 — Create order on backend
    let orderData;
    try {
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });
      orderData = await orderRes.json();
      console.log("Order created:", orderData);
    } catch (err) {
      console.error("Create order error:", err);
      alert("❌ Could not reach payment server. Try again.");
      setIsProcessing(false);
      return;
    }

    if (!orderData?.success) {
      alert("❌ Failed to create order: " + (orderData?.message ?? "Unknown error"));
      setIsProcessing(false);
      return;
    }

    // Step 3 — Open Razorpay modal
    const options = {
      key: "rzp_test_TWjLOUQteQeiw9",
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: "VintagePoultry",
      description: "Order Payment",
      order_id: orderData.order.id,

      handler: async function (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) {
        console.log("Payment response:", response);

        // Step 4 — Verify payment
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
        console.log("Verify response:", verifyData);

        if (verifyData.success) {
          // Step 5 — Save order to your DB
          await fetch("/api/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: user?.username,
              cartItems: cartList,
              paymentId: response.razorpay_payment_id,
            }),
          });

          setPaymentSuccess(true);
          clearCart();
          alert("✅ Payment successful! Order placed.");
          router.push("/customer/orders");
        } else {
          alert("❌ Payment verification failed. Contact support.");
        }
        setIsProcessing(false);
      },

      prefill: {
        name: user?.username ?? "",
        email: "",
        contact: "",
      },

      theme: {
        color: "#f59e0b",
      },

      modal: {
        ondismiss: () => {
          console.log("Razorpay modal dismissed");
          setIsProcessing(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response: any) {
      console.error("Payment failed:", response.error);
      alert(`❌ Payment failed: ${response.error.description}`);
      setIsProcessing(false);
    });

    rzp.open();
  }

  return (
    <section style={{ maxWidth: "800px", minWidth: "350px", margin: "2em auto", padding: "1em" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>Checkout</h1>

      {/* Header Row */}
      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600", borderBottom: "2px solid lightgray", paddingBottom: "0.5em", marginBottom: "1em" }}>
        <p style={{ flex: "2" }}>Product</p>
        <p style={{ flex: "1", textAlign: "center" }}>Qty</p>
        <p style={{ flex: "1", textAlign: "right" }}>Price</p>
        <p style={{ flex: "1", textAlign: "right" }}>Total</p>
      </div>

      {/* Items */}
      {cartList.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid lightgray", padding: "0.5em 0" }}>
          <p style={{ flex: "2" }}>{item.name}</p>
          <p style={{ flex: "1", textAlign: "center" }}>× {item.count}</p>
          <p style={{ flex: "1", textAlign: "right" }}>₹ {item.price}</p>
          <p style={{ flex: "1", textAlign: "right" }}>₹ {(item.count * item.price).toFixed(2)}</p>
        </div>
      ))}

      {/* Total */}
      <div style={{ marginTop: "2em", textAlign: "right" }}>
        <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Total Amount: ₹ {totalPrice.toFixed(2)}
        </p>
      </div>

      {/* Pay Button */}
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
          border: "none",
        }}
      >
        {isProcessing ? "Processing..." : `Pay ₹ ${totalPrice.toFixed(2)}`}
      </button>
    </section>
  );
}