"use client";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

export default function CartAndCheckoutPage() {
  const { cartItems, getCountsMap, clearCart, addToCart, removeFromCart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const countsMap = getCountsMap();
  const cartList = Object.values(countsMap);
  const totalItems = cartList.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartList.reduce((sum, item) => sum + item.count * item.price, 0);

  const handleProceedToCheckout = () => {
    router.push("/customer/checkout");
  };

  return (
    <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "1em" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>Your Cart</h1>

      {cartList.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <>
          {/* Cart Items */}
          {cartList.map((item) => (
            <div key={item.id} style={{ maxWidth: "1200px", minWidth: "350px", margin: "1em auto", padding: "0em" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 350px", height: "130px", overflow: "hidden", margin: "0em auto 0.5em", borderRadius: "1em" }}>
                  <img src={item.image} alt={item.name} style={{ width: "250px", objectFit: "cover" }} />
                </div>

                <p style={{ flex: "1 1 165px", margin: "0.25em" }}>{item.name}</p>
                <p style={{ flex: "1 1 165px", margin: "0.25em", fontWeight: "bold" }}>
                  ₹ {item.price} / {item.units}
                </p>

                <div style={{ flex: "1 1 auto", margin: "0.25em", display: "flex", alignItems: "center", gap: "1em" }}>
                  <button
                    onClick={() => removeFromCart(item)}
                    style={{ fontSize: "1.2em", padding: "0.25em 0.6em", backgroundColor: "lightgray", borderRadius: "0.5em", cursor: "pointer" }}
                  >−</button>

                  <p>{item.count}</p>

                  <button
                    onClick={() => addToCart(item)}
                    style={{ fontSize: "1.2em", padding: "0.25em 0.6em", backgroundColor: "goldenrod", color: "white", borderRadius: "0.5em", cursor: "pointer" }}
                  >+</button>
                </div>

                <p style={{ flex: "1 1 auto", margin: "0.25em", fontWeight: "bold", textAlign: "right" }}>
                  ₹ {(item.count * item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div style={{
            marginTop: "2em",
            paddingTop: "1em",
            borderTop: "2px solid goldenrod",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1em",
            fontSize: "1.1em"
          }}>
            <div>
              <p><strong>Total Items:</strong> {totalItems}</p>
              <p><strong>Total Price:</strong> ₹ {totalPrice.toFixed(2)}</p>
            </div>

            <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "crimson",
                  color: "white",
                  padding: "0.35em 0.75em",
                  borderRadius: "0.5em",
                  cursor: "pointer"
                }}
              >
                Clear Cart
              </button>

              <button
                onClick={handleProceedToCheckout}
                style={{
                  backgroundColor: "goldenrod",
                  color: "white",
                  padding: "0.35em 0.75em",
                  borderRadius: "0.5em",
                  cursor: "pointer"
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}