"use client";

import { useState } from "react";

export default function VendorRegistration() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPersonName: "",
    emailAddress: "",
    mobile: "",
    businessType: "",
    businessAddress: "",
    city: "",
    state: "",
    pinCode: "",
    businessDescription: "",
    termsAndConditions: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.termsAndConditions) {
      alert("You must accept the terms and conditions.");
      return;
    }

    try {
      const res = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("result", result)

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          businessName: "",
          contactPersonName: "",
          emailAddress: "",
          mobile: "",
          businessType: "",
          businessAddress: "",
          city: "",
          state: "",
          pinCode: "",
          businessDescription: "",
          termsAndConditions: false,
        });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong.");
    }
  }

  return (
    <section style={{ maxWidth: "750px", minWidth: "350px", margin: "2em auto", padding: "0em 0.5em", }}>

      <p className="text-2xl pb-4" style={{ textAlign: "center" }}>Business Information</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "1em", borderRadius: "1em", }}>
        {/* First Row */}
        <Input label="Business Name *" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Enter your Business Name" />

        <Input label="Contact Person *" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Enter Contact Person Name" />

        <Input label="Phone Number *" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Whatsapp Number" />

        <Input label="Email Address *" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Enter Business Email" />

        <Input label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Enter City" />

        <Input label="State" name="state" value={formData.state} onChange={handleChange} placeholder="Enter State" />

        <Input label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Enter Pin Code" />

        <Input label="Business Address *" name="businessAddress" value={formData.businessAddress} onChange={handleChange} placeholder="Enter Business Address" />

        <div style={{ display: "grid", padding: "0.0em 0.5em", flex: "1 1 350px", }}>
          <label htmlFor="businessType" style={{}}>Inquiry Type</label>
          <select name="businessType" id="businessType" value={formData.businessType} onChange={handleChange} style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em", }}>
            <option value="" disabled hidden>Select Business Type</option>
            <option value="restaurant">Restaurant</option>
            <option value="retailer">Retailer</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="distributor">Distributor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ display: "grid", padding: "0.5em 0.5em", flex: "1 1 350px", }}>
          <label htmlFor="businessDescription">Business Description</label>
          <textarea name="businessDescription" id="businessDescription" cols={30} rows={5} value={formData.businessDescription} onChange={handleChange} placeholder="Describe your business" style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em", }}></textarea>
        </div>

        <div style={{ display: "flex", padding: "1em 0.5em", flex: "1 1 450px", alignItems: "flex-start" }}>
          <input type="checkbox" name="termsAndConditions" id="termsAndConditions" checked={formData.termsAndConditions} onChange={handleChange} style={{ marginRight: "1em", marginTop: "0.25em" }} />
          <label htmlFor="termsAndConditions">
            <p>I agree to the Terms & Conditions</p>
            <span style={{ lineHeight: "1px",fontSize:"10px" }}>By checking this box, you agree to our vendor Terms, Conditions and Quality Standards</span>
          </label>
        </div>

        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 m-8 rounded-xl display-block mx-auto cursor-pointer" style={{ flex: "1 1 150px", }}>
          Send Message
        </button>

      </form>
    </section>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

function Input({ label, name, value, onChange, placeholder }: InputProps) {
  return (
    <div style={{ minWidth: "350px", margin: "0.5em auto", padding: "0em 0.5em", display: "grid", flex: "1 1 350px", }}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          border: "1px solid lightgrey",
          borderRadius: "0.5em",
          padding: "0.25em 0.5em",
          margin: "0.2em 0em",
        }}
      />
    </div>
  );
}
