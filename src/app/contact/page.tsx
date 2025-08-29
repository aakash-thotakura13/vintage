
import Description from "../components/Description"
import Heading from "../components/Heading"
import ContactPageForm from "../components/reusable/ContactPageForm"

const contactInfo = [
  {
    icon: "📍",
    title: "Farm Address",
    details: ["123 Farm Road", "Rural Valley, RV 12345"],
    color: "text-gold"
  },
  {
    icon: "📞",
    title: "Phone Numbers",
    details: ["Main: +1 (555) 123-4567", "Orders: +1 (555) 123-4568"],
    color: "text-gold"
  },
  {
    icon: "📧",
    title: "Email Addresses",
    details: ["General: contact@freshpoultry.com", "Orders: orders@freshpoultry.com"],
    color: "text-gold"
  },
  {
    icon: "🕒",
    title: "Business Hours",
    details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat-Sun: 8:00 AM - 4:00 PM"],
    color: "text-gold"
  }
];


const frequentlyAskedQuestions = [
  {
    question: "What are your delivery areas?",
    answer: "We deliver within a 50-mile radius of our farm. Same-day delivery is available for orders placed before 2 PM.",
  },
  {
    question: "How do I become a vendor?",
    answer: "Visit our Registration page to apply for vendor status. We'll review your application and contact you within 3-5 business days.",
  },
  {
    question: "What is your return policy?",
    answer: "We guarantee the freshness of all products. If you're not satisfied, contact us within 24 hours of delivery for a full refund or replacement.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer special pricing for bulk orders and regular vendor partners. Contact us for a custom quote based on your needs.",
  },
];



export default function ContactPage() {

  return (
    <section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", width: "80%", margin: "2em auto", }}>
        <section style={{ width: "80%", margin: "1em auto", }}>
          <p className="text-2xl">Send us a Message</p>
          <p>Fill out the form below and we will get back to you within 24 hours.</p>

          {/* A CONTACT FORM WILL BE DISPLAYED HERE <br /> Working in progress... */}
          <ContactPageForm />
        </section>
        <section>
          <Heading title="Get in Touch" />
          <Description title="Whether you have questions about our products, want to become a vendor partner, or need support with your order, we're here to help." />

          <section style={{ display: "grid", gap: "1em", padding: "2em", }}>
            {
              contactInfo.map((entry, id) => (
                <div key={id} style={{ display: "flex", alignItems: "center", border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", }}>
                  <p style={{ aspectRatio: "1/1", display: "inline-block", fontSize: "1.5em", marginRight: "1em", }}>{entry.icon}</p>
                  <div>
                    <p className="font-bold text-yellow-700">{entry.title}</p>
                    <div className="leading-tight text-sm text-gray-600">
                      {entry.details.map((entry, id) => <p key={id}>{entry}</p>)}
                    </div>
                  </div>
                </div>
              ))
            }
          </section>
        </section>
      </section>

      <section className="bg-gray-100 my-8" >

        <Heading title="Frequently Asked Questions" />
        <Description title="Find quick answers to common questions about our products and services." />

        <section style={{ width: "60%", margin: "0em auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1em", padding: "2em 1em", }}>
          {
            frequentlyAskedQuestions.map((entry, id) => (
              <div key={id} style={{ border: "1px solid lightgrey", padding: "0.5em 1em", borderRadius: "1em", backgroundColor: "white", }}>
                <p className="font-bold pb-4">{entry.question}</p>
                <p className="leading-tight text-sm text-gray-600">{entry.answer}</p>
              </div>
            ))
          }
        </section>

      </section>

    </section>
  )
}