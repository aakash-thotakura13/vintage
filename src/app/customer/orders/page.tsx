"use client";
import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";
import { useCart } from "@/app/context/CartContext";
import { useUser } from "@/app/context/UserContext";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const featuredProducts = [
  {
    id: 1,
    name: "Country Chicken",
    telName: "Natu Kodi",
    price: 700,              // ✅ numeric — used for cart calculations
    originalPrice: 800, // display string
    units: "kg",
    description: "Traditional free-range native chicken with authentic taste and high protein",
    badge: "Farm Fresh",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1780036377/cc-natukodi_kriblz.png",
    available: true,
  },
  {
    id: 2,
    name: "Guinea Fowl",
    telName: "Chima Kodi",
    price: 700,
    originalPrice: 800,
    units: "kg",
    description: "Premium country chicken with rich flavor and firm texture, naturally raised on farms",
    badge: "Premium Breed",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1780036377/cc-chimakodi_hrukkh.png",
    available: true,
  },
  {
    id: 3,
    name: "Black Hen",
    telName: "Kadaknath",
    price: 700,
    originalPrice: 800,
    units: "kg",
    description: "Rare black chicken breed known for its unique flavor, lean meat, and high nutrition",
    badge: "Premium Breed",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1780036377/cc-kadaknath_gdaqii.png",
    available: false,
  },
  {
    id: 4,
    name: "Farm Fresh Eggs",
    telName: "",
    price: 7,              // ✅ numeric — used for cart calculations
    originalPrice: 10, // display string
    units: "piece",
    description: "Grade A fresh eggs from pasture-raised hens",
    badge: "Fresh Daily",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1788596476/eggs_02_nwz4jv.jpg",
    available: true,
  },
];


export default function OrdersPage() {
  const { cartItems, addToCart, removeFromCart, getCountsMap } = useCart();
  const countsMap = getCountsMap();

  const { user, setUser } = useUser();
  // console.log(user)

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
                    style={{ borderRadius: "1em", objectFit: "scale-down" }} />
                </div>

                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", margin: "0.5em"
                }}>
                  <div>
                    <p>{product.name}</p>
                    <p style={{ textDecoration: "line-through", color: "gray", fontSize: "0.85em" }}>
                      ₹ {product.originalPrice}/{product.units}
                    </p>
                    <p style={{ color: "goldenrod", fontWeight: "bold" }}>
                      ₹ {product.price}/{product.units}
                    </p>
                  </div>

                  {count > 0 ? (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "0.25em", color: "goldenrod"
                    }}>
                      <button onClick={() => removeFromCart({ ...product, count: 1 })} style={{ fontSize: "1.6em" }}>
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



