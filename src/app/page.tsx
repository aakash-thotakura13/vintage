"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Heading from "./components/Heading";
import Description from "./components/Description";
import ProductCard from "./components/ProductCard";
import IconCard from "./components/IconCard";


const firstBar = [
  {
    top: "500+",
    bottom: "Happy Customers",
  },
  {
    top: "10+",
    bottom: "Years Experience",
  },
  {
    top: "50+",
    bottom: "Vendor Partners",
  },
  {
    top: "99%",
    bottom: "Quality Rating",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Pasture-Range Chicken",
    price: "₹ 650/kg",
    description: "Premium quality free-range chicken raised on organic feed",
    badge: "Bestseller",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    price: "₹ 20/piece",
    description: "Grade A fresh eggs from pasture-raised hens",
    badge: "Fresh Daily",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1757494577/2825573728_bf0c703dd0_b_uwwapm.jpg"
  },
  {
    id: 3,
    name: "Lemons",
    price: "₹ 5/piece",
    description: "Antibiotic-free turkey with rich, natural flavor",
    badge: "Organic",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/eggs_01_synqzx.jpg"
  }
];

const features = [
  {
    icon: "🌱",
    title: "Farm Fresh Quality",
    description: "All our products come directly from our certified organic farm"
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Same-day delivery available for orders placed before 2 PM"
  },
  {
    icon: "🏆",
    title: "Premium Standards",
    description: "Highest quality standards with complete traceability"
  },
  {
    icon: "💰",
    title: "Best Prices",
    description: "Competitive pricing with bulk discounts for vendors"
  }
];

const testimonials = [
  {
    name: "Sandeep",
    business: "Maketi Products",
    rating: 5,
    comment: "Best quality poultry products we've ever used. Our customers always compliment the taste!"
  },
  {
    name: "Krishna",
    business: "Chen's Market",
    rating: 5,
    comment: "Reliable delivery and exceptional freshness. Perfect for our retail business."
  },
  {
    name: "Sumit",
    business: "Rodriguez Catering",
    rating: 5,
    comment: "Outstanding service and premium quality. They never disappoint for our events."
  }
];


export default function Home() {

  const router = useRouter();

  return (
    <section>

      <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          <section style={{ flex: "1 1 350px", padding: "1.5em", }} className="object-cover">
            Choosing Natukodi, or country chicken, over boiler chicken reflects a commitment to healthier eating, cultural pride, and community support. Natukodi is naturally raised, grows at a slower pace, and develops richer flavor and firmer texture, making it a valued ingredient in traditional Telangana cuisine. Its taste brings back memories of village-style cooking and family recipes that have been cherished for generations. Beyond flavor, Natukodi is often considered a healthier choice because the birds are typically free-ranging, exposed to less artificial feed, and produce leaner meat with better nutritional quality.
            <br /><br />
            Selecting Natukodi also contributes to rural development. Many families, especially women, depend on small-scale poultry farming for steady income. When consumers choose Natukodi, they help sustain these livelihoods and encourage more people to remain involved in traditional farming practices. Growing demand also motivates young entrepreneurs to adopt sustainable and ethical poultry-rearing methods, strengthening the overall agriculture ecosystem. Ultimately, choosing Natukodi supports better food quality, rural empowerment, and the preservation of Telangana’s culinary heritage.
          </section>
          <Image src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg" alt="chicken_one" className="object-cover rounded-3xl shadow-2xl" width={450} height={450} style={{ flex: "1 1 300px", }} />
        </div>
      </div>

      <section className="bg-gray-100 py-8 my-8">
        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          {
            firstBar.map((entry, id) => (
              <div key={id} className="text-center" style={{ flex: "1 1 120px", }}>
                <h2 className="text-3xl font-bold text-yellow-500">{entry.top}</h2>
                <p className="text-sm">{entry.bottom}</p>
              </div>
            ))
          }
        </section>
      </section>

      <section className="bg-white-100 py-8 my-8">

        <Heading title="Featured Products" />
        <Description title="Discover our most popular farm-fresh products, carefully selected for quality and taste!" />

        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", }}>
          {
            featuredProducts.map((entry) => (
              <ProductCard
                key={entry.id}
                name={entry.name}
                price={entry.price}
                description={entry.description}
                badge={entry.badge}
                image={entry.image}
              />
            ))
          }
        </section>

      </section>

      <section className="bg-gray-100 py-8 my-8" >

        <Heading title="Why Choose VintagePoultry?" />
        <Description title="We're committed to providing the highest quality products with exceptional service." />

        <IconCard iconsArray={features} />

      </section>

      <section className="bg-white-100 py-8 my-8">

        <Heading title="What Our Customers Say?" />
        <Description title="Real feedback from businesses that trust our products." />

        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", }}>
          {
            testimonials.map((testimonial, id) => {
              return (
                <div key={id} style={{ border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", flex: "1 1 350px", }}>
                  <p className="font-bold">{testimonial.name}</p>
                  <p style={{ display: "inline-block", fontSize: "1em", color: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{"★".repeat(5)}</p>
                  <p className="leading-tight text-sm text-gray-600">{testimonial.comment}</p>
                </div>
              )
            })
          }
        </section>

      </section>

      <section className="bg-gray-100 py-8 my-8" >
        <Heading title="Ready to Experience Farm Fresh Quality?" />
        <Description title="Join hundreds of satisfied customers who trust us for their premium poultry needs." />

        <div className="flex justify-center">
          <button
            className="px-4 py-2 mr-2 border border-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-white hover:cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
          <button
            className="px-4 py-2 ml-2 border border-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-white hover:cursor-pointer"
            onClick={() => router.push("/registration")}
          >
            Become a Vendor
          </button>
        </div>

      </section>

      <section style={{ backgroundColor: "black", color: "whitesmoke", }}>
        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", display: "flex", justifyContent: "space-between", padding: "1em 0em", flexWrap: "wrap", }}>
          <p>📞 Call us: +91 874512 12458</p>
          <p>📧 Email: contact@vintagepoultry.com</p>
          <p>🕒 Mon-Fri: 7:00 AM - 6:00 PM</p>
        </section>
      </section>

      <hr style={{ color: "white" }} />

    </section>
  );
}