"use client";
import { useState } from "react";

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAdd: "",
    phoneNumber: "",
    inquiryType: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", formData);
  }

  return (
    <form onSubmit={handleSubmit} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "1em", borderRadius: "1em", }}>

      {/* Name & Email */}
      <section style={{ display: "flex", gap: "1em", flexWrap: "wrap", margin: "1em auto", justifyContent: "space-between" }}>
        <Input label="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <Input label="Email Address *" name="emailAdd" value={formData.emailAdd} onChange={handleChange} placeholder="Email Address" type="email" />
      </section>

      {/* Phone & Inquiry Type */}
      <section style={{ display: "flex", gap: "1em", flexWrap: "wrap", margin: "1em auto", justifyContent: "space-between" }}>
        <Input label="Phone Number *" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" type="tel" />

        <div style={{ display: "grid", flex: "1 1 350px", }}>
          <label htmlFor="inquiryType">Inquiry Type</label>
          <select name="inquiryType" id="inquiryType" value={formData.inquiryType} onChange={handleChange} style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em", }}>
            <option value="" disabled hidden>Select Inquiry Type</option>
            <option value="general">General Inquiry</option>
            <option value="product">Product Information</option>
            <option value="vendor">Vendor Partnership</option>
            <option value="order">Order Support</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>
      </section>

      {/* Subject */}
      <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />

      {/* Message */}
      <div style={{ display: "grid", margin: "1em 0em" }}>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="5" value={formData.message} onChange={handleChange} placeholder="Please describe your inquiry in detail" style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em", }}></textarea>
      </div>

      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-xl">Send Message</button>
    </form>
  );
}

function Input({ label, name, value, onChange, placeholder, type = "text", }) {
  return (
    <div style={{ display: "grid", flex: "1 1 350px", }}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em", }} />
    </div>
  );
}
