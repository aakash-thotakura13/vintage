import Image from "next/image";

import Heading from "./components/Heading";
import Description from "./components/Description";
import ProductCard from "./components/ProductCard";
import IconCard from "./components/IconCard";

export default function Home() {

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
      name: "Free-Range Chicken",
      price: "₹1,199/kg",
      description: "Premium quality free-range chicken raised on organic feed",
      badge: "Bestseller",
      image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
    },
    {
      id: 2,
      name: "Farm Fresh Eggs",
      price: "₹449/kg",
      description: "Grade A fresh eggs from pasture-raised hens",
      badge: "Fresh Daily",
      image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
    },
    {
      id: 3,
      name: "Organic Turkey",
      price: "₹799/kg",
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
      name: "Sarah Johnson",
      business: "Johnson's Diner",
      rating: 5,
      comment: "Best quality poultry products we've ever used. Our customers always compliment the taste!"
    },
    {
      name: "Mike Chen",
      business: "Chen's Market",
      rating: 5,
      comment: "Reliable delivery and exceptional freshness. Perfect for our retail business."
    },
    {
      name: "Lisa Rodriguez",
      business: "Rodriguez Catering",
      rating: 5,
      comment: "Outstanding service and premium quality. They never disappoint for our events."
    }
  ];


  return (
    <div>
      <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", margin: "0 auto", }}>
        <section style={{ flex: "1 1 0", padding: "5em", backgroundColor: "gold", }}></section>
        <Image src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg" alt="chicken_one" className="object-cover rounded-3xl shadow-2xl" width={450} height={450} style={{ flex: "0 0 300px", }} />
      </section>

      <section className="bg-gray-100 py-8 my-8">
        <section style={{ width: "70%", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          {
            firstBar.map((entry, id) => (
              <div key={id} className="text-center" style={{ flex: "1 1 0", }}>
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

        <section style={{ width: "80%", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", }}>
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

        <section style={{ width: "80%", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", }}>
          {
            testimonials.map((testimonial, id) => {
              return (
                <div key={id} style={{ border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", flex: "1 1 300px", }}>
                  <p className="font-bold">{testimonial.name}</p>
                  <p style={{ display: "inline-block", fontSize: "1em", color: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{"★".repeat(5)}</p>
                  <p className="leading-tight text-sm text-gray-600">{testimonial.comment}</p>
                </div>
              )
            })
          }
        </section>

      </section>

      <section className="bg-gray-100 my-8 pb-8" >
        <Heading title="Ready to Experience Farm Fresh Quality?" />
        <Description title="Join hundreds of satisfied customers who trust us for their premium poultry needs." />

        <div className="flex justify-center">
          <button className="px-4 py-2 mr-2 border border-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-white hover:cursor-pointer">Shop Now</button>
          <button className="px-4 py-2 ml-2 border border-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-white hover:cursor-pointer">Become a Vendor</button>
        </div>

      </section>

      <section style={{ backgroundColor: "black", color: "whitesmoke", }}>
        <section style={{ display: "flex", justifyContent: "space-evenly", padding: "1em 2em", flexWrap: "wrap", gap: "1em", }}>
          <p>📞 Call us: +91 874512 12458</p>
          <p>📧 Email: contact@vintagepoultry.com</p>
          <p>🕒 Mon-Fri: 7:00 AM - 6:00 PM</p>
        </section>
      </section>

    </div>
  );
}
