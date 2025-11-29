
import Heading from "../components/Heading";
import Description from "../components/Description";
import { Metadata } from "next";

// app/about/page.tsx
export const metadata: Metadata = {
  title: "About Us | VintagePoultry",
  description:
    "Learn about VintagePoultry's story, ethical farming practices, USDA-certified quality standards, and our journey from a small family farm to a trusted poultry provider.",
  keywords: [
    "about VintagePoultry",
    "ethical poultry farming",
    "organic chicken farm",
    "usda certified poultry",
    "sustainable agriculture",
    "vintage poultry story"
  ],
  openGraph: {
    title: "About Us | VintagePoultry",
    description:
      "Discover our legacy of organic farming, premium poultry, and sustainable practices. A family-run business since 1995.",
    url: "https://yourdomain.com/about",
    siteName: "VintagePoultry",
    images: [
      {
        url: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg",
        width: 800,
        height: 600,
        alt: "Our farm-raised chicken",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About VintagePoultry | Premium Poultry Since 1995",
    description:
      "Meet the people and principles behind VintagePoultry — a trusted name in organic, ethically raised poultry.",
    images: ["https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"],
  },
};

const farmingPractices = [
  {
    title: "Free-Range Environment",
    description: "Our poultry roam freely in open pastures with access to fresh air and natural sunlight",
    icon: "🌾"
  },
  {
    title: "Organic Feed",
    description: "All our animals are fed with certified organic, non-GMO feed for optimal health",
    icon: "🌱"
  },
  {
    title: "No Antibiotics",
    description: "We maintain healthy livestock without the use of antibiotics or growth hormones",
    icon: "🚫"
  },
  {
    title: "Sustainable Practices",
    description: "Our farming methods focus on environmental sustainability and animal welfare",
    icon: "♻️"
  }
];

const qualityStandards = [
  {
    title: "Farm-Fresh Sourcing",
    description: "All poultry is sourced directly from healthy, well-maintained farms with strict hygiene practices.",
    badge: "Farm Fresh",
  },
  {
    title: "Regular Testing",
    description: "Frequent quality checks ensure product safety and freshness",
    badge: "Tested",
  },
  {
    title: "Hygienic Handling",
    description: "From careful processing to gentle handling, every step is designed to keep your poultry naturally fresh and wholesome.",
    badge: "Handled Right",
  },
  {
    title: "Traceability",
    description: "Complete farm-to-table tracking for every product we deliver",
    badge: "Tracked",
  }
];

const timeline = [
  { year: "1995", event: "Farm founded by Johnson family" },
  { year: "2001", event: "USDA Organic certification obtained" },
  { year: "2008", event: "Expanded to 500 acres of farmland" },
  { year: "2015", event: "Launched vendor partnership program" },
  { year: "2020", event: "Introduced online ordering system" },
  { year: "2024", event: "Serving 500+ customers region-wide" }
];

export default function AboutPage() {

  return (
    <section>

      <section className="bg-white-100 py-8 my-8" >
        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: "1em", }}>

          <section style={{ flex: "1 1 350px" }}>
            <Heading title="Our Story" />
            <p className="py-2">Founded in 1995 by the Johnson family, FreshPoultry began as a small family farm with a simple mission: to raise healthy, happy poultry using traditional farming methods combined with modern sustainability practices.</p>
            <p className="py-2">Over the years, we have grown from a local farm stand to a trusted supplier of premium poultry products, serving hundreds of families and businesses across the region while maintaining our commitment to quality and ethics.</p>
            <p className="py-2">Today, our third-generation family business continues to prioritize animal welfare, environmental stewardship, and customer satisfaction in everything we do.</p>
            <div style={{ display: "flex", marginTop: "0.5em" }}>
              {
                ["Family Owned", "Est. 1995", "Organic Certified",].map((entry, id) =>
                  <small
                    key={id}
                    className="mr-8 px-2 py-1 bg-yellow-500 rounded-xl"
                  >
                    {entry}
                  </small>
                )
              }
            </div>
          </section>

          <section style={{ flex: "1 1 350px" }}>
            <img
              style={{ borderRadius: "1em", height: "auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
              alt="chicken_one"
            // className=" rounded-3xl shadow-2xl mt-12 w-full h-auto"
            />
          </section>

        </section>
      </section>

      <section className="bg-gray-100 py-8 my-8">

        <Heading title="Our Journey" />
        <Description title="Key milestones in our farming legacy" />

        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          {
            timeline.map((entry, id) => (
              <div key={id} style={{ border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", backgroundColor: "white", flex: "1 1 350px", }}>
                <p className="font-bold text-yellow-500">{entry.year}</p>
                <small>{entry.event}</small>
              </div>
            ))
          }
        </section>

      </section>

      <section className="bg-white-100 py-8 my-8" >

        <Heading title="Our Farming Practices" />
        <Description title="We believe in ethical farming that respects both animals and the environment, ensuring the highest quality products for our customers." />

        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          {
            farmingPractices.map((entry, id) => (
              <div key={id} style={{ border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", flex: "1 1 250px", alignItems: "center", }}>
                <p style={{ display: "inline-block", fontSize: "2em", backgroundColor: "goldenrod", borderRadius: "50%", margin: "0em 0.5em 0em 0em", float: "left" }}>{entry.icon}</p>
                <p className="font-bold" style={{}}>{entry.title}</p>
                <p className="leading-tight text-sm text-gray-600" style={{ textAlign: "left" }}>
                  {entry.description}
                </p>
              </div>
            ))
          }
        </section>

      </section>

      <section className="bg-gray-100 py-8 my-8" >

        <Heading title="Quality Standards" />
        <Description title="Every product that leaves our farm meets the highest standards of quality, safety, and freshness through rigorous testing and monitoring." />

        <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", }}>
          {
            qualityStandards.map((testimonial, id) => {
              return (
                <div key={id} style={{ border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", backgroundColor: "white", flex: "1 1 250px", }}>
                  <p className="font-bold">{testimonial.title}</p>
                  <small style={{ display: "inline-block", fontSize: "1em", color: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{testimonial.badge}</small>
                  <p className="leading-tight text-sm text-gray-600">{testimonial.description}</p>
                </div>
              )
            })
          }
        </section>

      </section>

    </section>
  )
}