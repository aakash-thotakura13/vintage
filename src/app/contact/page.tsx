
import { Metadata } from "next";
import Description from "../components/Description"
import Heading from "../components/Heading"
import ContactPageForm from "../components/reusable/ContactPageForm"

// app/contact/page.tsx

export const metadata: Metadata = {
  title: "Contact Us | VintagePoultry",
  description:
    "Get in touch with VintagePoultry for orders, vendor partnerships, or general inquiries. Reach out via phone, email, or our contact form.",
  keywords: [
    "contact VintagePoultry",
    "poultry delivery support",
    "become a vendor",
    "bulk poultry orders",
    "farm contact info",
    "organic chicken supplier"
  ],
  openGraph: {
    title: "Contact Us | VintagePoultry",
    description:
      "Questions? Need support or want to become a vendor? Contact VintagePoultry — we're here to help.",
    url: "https://yourdomain.com/contact",
    siteName: "VintagePoultry",
    images: [
      {
        url: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg",
        width: 800,
        height: 600,
        alt: "Contact VintagePoultry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach Out to VintagePoultry",
    description:
      "Have questions or feedback? Fill out our form or contact us via phone or email — we respond within 24 hours.",
    images: ["https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg"],
  },
};

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

      <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", minWidth: "350px", margin: "1em auto", }}>

        <section style={{ flex: "1 1 350px", margin: "2em 0em", }}>
          <p className="text-2xl">Send us a Message</p>
          <p>Fill out the form below and we will get back to you within 24 hours.</p>

          {/* A CONTACT FORM WILL BE DISPLAYED HERE <br /> Working in progress... */}
          <ContactPageForm />
        </section>

        <section style={{ flex: "1 1 350px" }}>
          <Heading title="Get in Touch" />
          <Description title="Whether you have questions about our products, want to become a vendor partner, or need support with your order, we're here to help." />

          <section style={{ display: "grid", gap: "1em", margin: "0em auto", }}>
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

      <section className="bg-gray-100 py-8 my-8" >

        <Heading title="Frequently Asked Questions" />
        <Description title="Find quick answers to common questions about our products and services." />

        <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", width: "80%", minWidth: "350px", margin: "1em auto", }}>
          {
            frequentlyAskedQuestions.map((entry, id) => (
              <div key={id} style={{ border: "1px solid lightgrey", padding: "0.5em 1em", borderRadius: "1em", backgroundColor: "white", flex: "1 0 250px", }}>
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