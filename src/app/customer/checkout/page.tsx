"use client";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cartItems, getCountsMap, clearCart } = useCart();
  const router = useRouter();
  const countsMap = getCountsMap();

  const totalPrice = Object.values(countsMap).reduce(
    (sum: number, item) => sum + item.price * item.count,
    0
  );

  useEffect(() => {
    if (cartItems.length === 0) {
      // Redirect back to cart if empty
      router.push("/profile/invoice");
    }
  }, [cartItems, router]);

  return (
    <section style={{ maxWidth: "800px", minWidth: "350px", margin: "2em auto", padding: "1em" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>Checkout</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.values(countsMap).map((item) => (
          <li key={item.id} style={{ marginBottom: "1em" }}>
            <strong>{item.name}</strong> × {item.count} — ₹ {(item.count * item.price).toFixed(2)}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2em" }}>
        <p style={{ fontWeight: "bold" }}>Total Amount: ₹ {totalPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={() => {
          alert("Order placed successfully!");
          clearCart();
          router.push("/profile/orders");
        }}
        style={{
          marginTop: "2em",
          padding: "0.75em 2em",
          backgroundColor: "green",
          color: "white",
          borderRadius: "0.5em",
          cursor: "pointer"
        }}
      >
        Confirm & Place Order
      </button>
    </section>
  );
}
