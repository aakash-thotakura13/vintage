import Image from "next/image";



import Heading from "./components/Heading";
import Description from "./components/Description";
import ProductCard from "./components/ProductCard";

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
      <section className="grid grid-cols-[1fr_1fr] gap-4 my-8">
        <section></section>
        <Image src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg" alt="chicken_one" className="object-cover rounded-3xl shadow-2xl" width={500} height={500} />
      </section>

      <section className="bg-gray-100 py-8">
        <section style={{ width: "70%", margin: "0 auto", display: "flex", justifyContent: "space-around" }}>
          {
            firstBar.map((entry, id) => (
              <div key={id} className="text-center">
                <h2 className="text-3xl font-bold text-yellow-500">{entry.top}</h2>
                <p>{entry.bottom}</p>
              </div>
            ))
          }
        </section>
      </section>

      <Heading title="Featured Products" />
      <Description title="Discover our most popular farm-fresh products, carefully selected for quality and taste!" />

      <section className="flex justify-center" style={{ width: "70%", margin: "0 auto", }}>
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

      <section className="bg-gray-100 my-8" >

        <Heading title="Why Choose VintagePoultry?" />
        <Description title="We're committed to providing the highest quality products with exceptional service." />

        <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1em", padding: "2em", width: "70%", margin: "0 auto", }}>
          {
            features.map((entry, id) => (
              <div key={id} style={{ textAlign: "center", border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", }}>
                <p style={{ display: "inline-block", fontSize: "2em", backgroundColor: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{entry.icon}</p>
                <p className="font-bold">{entry.title}</p>
                <p className="leading-tight text-sm text-gray-600">
                  {entry.description}
                </p>
              </div>
            ))
          }
        </section>

      </section>

      <Heading title="What Our Customers Say?" />
      <Description title="Real feedback from businesses that trust our products." />

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1em", padding: "0em 2em", width: "70%", margin: "0 auto", }}>
        {
          testimonials.map((testimonial, id) => {
            return (
              <div key={id} style={{ border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
                <p className="font-bold">{testimonial.name}</p>
                <p style={{ display: "inline-block", fontSize: "1em", color: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{"★".repeat(5)}</p>
                <p className="leading-tight text-sm text-gray-600">{testimonial.comment}</p>
              </div>
            )
          })
        }
      </section>


      <section className="bg-gray-100 my-8 pb-8" >
        <Heading title="Ready to Experience Farm Fresh Quality?" />
        <Description title="Join hundreds of satisfied customers who trust us for their premium poultry needs." />

        <div className="flex justify-center">
          <button className="p-4 mr-2 border border-yellow-500 rounded-2xl" style={{ backgroundColor: "goldenrod", color: "whitesmoke" }}>Shop Now</button>
          <button className="p-4 ml-2 border border-yellow-500 rounded-2xl" style={{ backgroundColor: "goldenrod", color: "whitesmoke" }}>Become a Vendor</button>
        </div>

      </section>

      <section style={{ backgroundColor: "black", color: "whitesmoke", }}>
        <section style={{ display: "flex", justifyContent: "space-evenly", padding: "1em 2em", }}>
          <p>📞 Call us: +91 874512 12458</p>
          <p>📧 Email: contact@vintagepoultry.com</p>
          <p>🕒 Mon-Fri: 7:00 AM - 6:00 PM</p>
        </section>
      </section>

    </div>
  );
}
