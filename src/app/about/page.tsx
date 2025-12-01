import Image from "next/image";
import Heading from "../components/Heading";
import Description from "../components/Description";
import { Metadata } from "next";

// -------------------- METADATA --------------------

export const metadata: Metadata = {
  title: "About Us | VintagePoultry",
  description:
    "Learn about VintagePoultry's story, ethical farming practices, FSSAI-certified quality standards, and our journey from a small family farm to a trusted poultry provider.",
  keywords: [
    "about VintagePoultry",
    "ethical poultry farming",
    "organic chicken farm",
    "FSSAI certified poultry",
    "sustainable agriculture",
    "vintage poultry story",
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
    images: [
      "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg",
    ],
  },
};

// -------------------- STATIC CONTENT --------------------

const farmingPractices = [
  {
    title: "Free-Range Environment",
    description:
      "Our poultry roam freely in open pastures with access to fresh air and natural sunlight",
    icon: "🌾",
  },
  {
    title: "Organic Feed",
    description:
      "All our animals are fed with certified organic, non-GMO feed for optimal health",
    icon: "🌱",
  },
  {
    title: "No Antibiotics",
    description:
      "We maintain healthy livestock without the use of antibiotics or growth hormones",
    icon: "🚫",
  },
  {
    title: "Sustainable Practices",
    description:
      "Our farming methods focus on environmental sustainability and animal welfare",
    icon: "♻️",
  },
];

const qualityStandards = [
  {
    title: "Farm-Fresh Sourcing",
    description:
      "All poultry is sourced directly from healthy farms with strict hygiene practices.",
    badge: "Farm Fresh",
  },
  {
    title: "Regular Testing",
    description: "Frequent quality checks ensure product safety and freshness",
    badge: "Tested",
  },
  {
    title: "Hygienic Handling",
    description:
      "From careful processing to clean handling, every step ensures natural freshness.",
    badge: "Handled Right",
  },
  {
    title: "Traceability",
    description:
      "Complete farm-to-table tracking for every product we deliver",
    badge: "Tracked",
  },
];

const timeline = [
  { year: "1995", event: "Farm founded by Johnson family" },
  { year: "2001", event: "FSSAI Organic certification obtained" },
  { year: "2008", event: "Expanded to 500 acres of farmland" },
  { year: "2015", event: "Launched vendor partnership program" },
  { year: "2020", event: "Introduced online ordering system" },
  { year: "2024", event: "Serving 500+ customers region-wide" },
];

// -------------------- PAGE COMPONENT --------------------

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-20">

      {/* ---------- STORY SECTION ---------- */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-10 items-top">

          {/* Left text */}
          <div className="flex-1 min-w-[320px]">
            <Heading title="Our Story" />
            <p className="py-2">
              Vintage Poultry was founded in 2021 with a simple yet powerful mission:
              to raise healthy, happy poultry using a blend of traditional farming
              methods and modern sustainability practices. What started as a small,
              family-owned farm soon became a trusted source for premium poultry
              products in our local community, built on the values of quality, care,
              and ethical farming. For two generations, our farm grew steadily,
              focusing on providing fresh, flavorful poultry to families and businesses
              who valued quality and integrity.
            </p>

            <p className="py-2">
              In 2023, we saw an exciting opportunity to expand beyond the local
              community. We took our commitment to quality and customer service
              online, making it easier than ever for people to enjoy fresh,
              farm-raised chicken delivered right to their door.
            </p>

            <p className="py-2">
              Embracing the digital age has allowed us to serve more people,
              while staying true to the core values that have guided us for nearly
              three decades: animal welfare, environmental care, and the highest
              standards of customer satisfaction.
              Today, Vintage Poultry is more than just a farm; it&apos;s a growing
              community of people who care about the food they eat and where it
              comes from.
            </p>

            <p className="py-2">
              From our family to yours, we&apos;re here to put a &quot;kick&quot; on your plate with
              poultry that&apos;s as fresh and flavorful as it gets.
            </p>


            <div className="flex gap-4 mt-3">
              {["Family Owned", "Est. 1995", "Organic Certified"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="bg-yellow-500 px-4 py-1 rounded-xl text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 min-w-[320px]">
            <Image
              src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
              alt="Organic farm chicken"
              width={550}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE SECTION ---------- */}
      {/* <section className="bg-gray-100 py-10">
        <Heading title="Our Journey" />
        <Description title="Key milestones in our farming legacy" />

        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {timeline.map((t, index) => (
            <div
              key={index}
              className="bg-white border p-5 rounded-xl shadow-sm"
            >
              <p className="font-bold text-yellow-600">{t.year}</p>
              <p className="text-sm text-gray-700 mt-1">{t.event}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ---------- FARMING PRACTICES ---------- */}
      <section className="bg-gray-100 py-10">
        <Heading title="Our Farming Practices" />
        <Description title="Ethical farming that respects both animals and the environment." />

        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {farmingPractices.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-500 p-5 rounded-xl shadow-sm"
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="font-semibold mt-2">{item.title}</p>
              <p className="text-sm text-gray-600 mt-1 leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- QUALITY STANDARDS ---------- */}
      <section className="py-10">
        <Heading title="Quality Standards" />
        <Description title="Every product meets the highest standards of safety and freshness." />

        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {qualityStandards.map((item, index) => (
            <div
              key={index}
              className="bg-white border p-5 rounded-xl shadow-sm"
            >
              <p className="font-bold">{item.title}</p>
              <span className="text-yellow-600 text-sm font-semibold mt-1 inline-block">
                {item.badge}
              </span>
              <p className="text-sm text-gray-600 mt-2 leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}