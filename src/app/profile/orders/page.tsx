"use client";
import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const featuredProducts = [
  {
    id: 1,
    name: "Free-Range Chicken",
    price: 1999,
    units: "kg",
    description: "Premium quality free-range chicken raised on organic feed",
    badge: "Bestseller",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    price: 89,
    units: "dozen",
    description: "Grade A fresh eggs from pasture-raised hens",
    badge: "Fresh Daily",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1757494577/2825573728_bf0c703dd0_b_uwwapm.jpg"
  },
  {
    id: 3,
    name: "Organic Turkey",
    price: 799,
    units: "kg",
    description: "Antibiotic-free turkey with rich, natural flavor",
    badge: "Organic",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/eggs_01_synqzx.jpg"
  }
];


export default function OrdersPage() {
  const { cartItems, addToCart, removeFromCart, getCountsMap } = useCart();
  const countsMap = getCountsMap();

  const { user, setUser } = useUser();
  console.log(user)

  return (
    <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0 auto", padding: "0" }}>

      <section className="bg-white-100 py-8 my-8">

        <Heading title="Select Products" />
        <Description title="Browse and add fresh farm products to your cart." />

        <section style={{
          maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0 0.5em",
          display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "1em"
        }}>
          {featuredProducts.map((product) => {
            const count = countsMap[product.id]?.count || 0;

            return (
              <section key={product.id}>
                <div style={{
                  border: "1px solid lightgrey", width: "330px", aspectRatio: "1.5/1",
                  borderRadius: "1em", textAlign: "center", overflow: "hidden",
                  marginBottom: "0.5em", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}>
                  <img src={product.image} alt={product.name}
                    style={{ borderRadius: "1em", objectFit: "cover" }} />
                </div>

                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", margin: "0.5em"
                }}>
                  <div>
                    <p>{product.name}</p>
                    <p>₹ {product.price} / {product.units}</p>
                  </div>

                  {count > 0 ? (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "0.25em", color: "goldenrod"
                    }}>
                      <button onClick={() => removeFromCart({ ...product, count: 1 })}style={{ fontSize: "1.6em" }}>
                        <IoIosArrowDropleftCircle />
                      </button>
                      <p style={{ fontSize: "1.3em" }}>{count}</p>
                      <button onClick={() => addToCart({ ...product, count: 1 })} style={{ fontSize: "1.6em" }}>
                        <IoIosArrowDroprightCircle />
                      </button>
                    </div>
                  ) : (
                    <div style={{ textAlign: "right" }}>
                      <button style={{
                        backgroundColor: "goldenrod", color: "white",
                        padding: "0.5em 1em", borderRadius: "0.5em", cursor: "pointer"
                      }} onClick={() => addToCart({ ...product, count: 1 })}>
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </section>
            );
          })}

        </section>

      </section>

    </section>
  );
}



