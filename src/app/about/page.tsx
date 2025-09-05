
import Heading from "../components/Heading";
import Description from "../components/Description";

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
    title: "USDA Certified",
    description: "All products meet or exceed USDA organic certification standards",
    badge: "Certified"
  },
  {
    title: "Regular Testing",
    description: "Frequent quality checks ensure product safety and freshness",
    badge: "Tested"
  },
  {
    title: "Cold Chain Management",
    description: "Temperature-controlled storage and transportation maintain product integrity",
    badge: "Fresh"
  },
  {
    title: "Traceability",
    description: "Complete farm-to-table tracking for every product we deliver",
    badge: "Tracked"
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

      <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", margin: "0 auto", padding: "1em 0em" }}>

        <section style={{ flex: "1 0 350px" }}>
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

        <img
          style={{ flex: "1 0 350px", objectFit: "cover", borderRadius: "1em", minWidth: "350px", height: "auto", }}
          src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"
          alt="chicken_one"
        // className=" rounded-3xl shadow-2xl mt-12 w-full h-auto"
        />
      </section>

      <section className="bg-gray-100 py-8 my-8" >

        <Heading title="Our Journey" />
        <Description title="Key milestones in our farming legacy" />

        <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "65%", margin: "0 auto", padding: "1em 0em" }}>
          {
            timeline.map((entry, id) => (
              <div key={id} style={{ border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", backgroundColor: "white", flex: "1 0 350px", }}>
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

        <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", margin: "0 auto", padding: "1em 0em" }}>
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

        <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", margin: "0 auto", padding: "1em 0em" }}>
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