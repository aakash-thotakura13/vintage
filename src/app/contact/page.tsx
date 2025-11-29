
import { Metadata } from "next";
import Description from "../components/Description"
import Heading from "../components/Heading"
import ContactPageForm from "../components/reusable/ContactPageForm"
import ContactUseDetails from "../components/ContactUsDetails";

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
  // {
  //   icon: "📍",
  //   title: "Farm Address",
  //   details: ["123 Farm Road", "Rural Valley, RV 12345"],
  // },
  {
    icon: "📞",
    title: "Phone Numbers",
    details: ["Main: 7893912177"],
  },
  {
    icon: "📧",
    title: "Email Addresses",
    details: ["nizam.vintage1@gmail.com"],
  },
  {
    icon: "🕒",
    title: "Business Hours",
    details: ["Mon-Fri: 7:00 AM - 2:00 PM", "Sat-Sun: 7:00 AM - 4:00 PM"],
  }
];

const frequentlyAskedQuestions = [
  {
    question: "What are your delivery areas?",
    answer: "Fresh from our farm to your doorstep in Kothagudem and Palvoncha. Order before 2 PM and we’ll deliver it the very same day!",
  },
  {
    question: "How do I become a vendor?",
    answer: "Visit our Registration page to apply for vendor status. We'll review your application and contact you within 3-5 business days.",
  },
  {
    question: "What is your return policy?",
    answer: "We stand by the freshness of every product. Not thrilled? Message us within 1 hour of delivery and we’ll take care of it right away!",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer special pricing for bulk orders and regular vendor partners. Contact us for a custom quote based on your needs.",
  },
];


export default function ContactPage() {

  return (

    <section>

      <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", }}>

        <section style={{ flex: "1 1 350px", margin: "2em 0em", }}>
          <Heading title="Send us a Message" />
          <Description title="Fill out the below form and we will get back to you within 24 hours." />
          <Description title="" />

          <ContactPageForm />
        </section>

        <section style={{ flex: "1 1 350px", margin: "2em auto", borderRadius: "1em", }}>
          <Heading title="Get in Touch" />
          <Description title="Whether you have questions about our products, want to become a vendor partner, or need support with your order, we're here to help." />

          <ContactUseDetails contactInfo={contactInfo} />
        </section>

      </section>

      <section className="bg-gray-100 py-8 my-8" >

        <Heading title="Frequently Asked Questions" />
        <Description title="Find quick answers to common questions about our products and services." />

        <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1em", maxWidth: "1200px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", }}>
          {
            frequentlyAskedQuestions.map((entry, id) => (
              <div key={id} style={{ border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", backgroundColor: "white", flex: "1 1 280px", }}>
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