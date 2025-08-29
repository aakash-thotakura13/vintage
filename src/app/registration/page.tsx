"use client";

import { useState } from "react";

export default function VendorRegistration() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPersonName: "",
    emailAddress: "",
    businessType: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.termsAndConditions) {
      alert("You must accept the terms and conditions.");
      return;
    }

    console.log("Form submitted", formData);
  }

  return (
    <section
      style={{
        width: "43%",
        margin: "2em auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "1em",
        borderRadius: "1em",
      }}
    >
      <p className="text-2xl pb-4">Business Information</p>

      <form onSubmit={handleSubmit}>
        {/* First Row */}
        <section
          style={{
            display: "grid",
            gap: "1em",
            gridTemplateColumns: "1fr 1fr",
            margin: "1em 0em",
          }}
        >
          <Input
            label="Business Name *"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your Business Name"
          />
          <Input
            label="Contact Person *"
            name="contactPersonName"
            value={formData.contactPersonName}
            onChange={handleChange}
            placeholder="Enter contact person name"
          />
        </section>

        {/* Second Row */}
        <section
          style={{
            display: "grid",
            gap: "1em",
            gridTemplateColumns: "1fr 1fr",
            margin: "1em 0em",
          }}
        >
          <Input
            label="Email Address *"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter business email"
          />
          <div style={{ display: "grid" }}>
            <label htmlFor="businessType">Inquiry Type</label>
            <select
              name="businessType"
              id="businessType"
              value={formData.businessType}
              onChange={handleChange}
              style={{
                border: "1px solid lightgrey",
                borderRadius: "0.5em",
                padding: "0.25em 0.5em",
                margin: "0.2em 0em",
              }}
            >
              <option value="" disabled hidden>
                Select Business Type
              </option>
              <option value="restaurant">Restaurant</option>
              <option value="retailer">Retailer</option>
              <option value="wholesaler">Wholesaler</option>
              <option value="distributor">Distributor</option>
              <option value="other">Other</option>
            </select>
          </div>
        </section>

        {/* Third Row */}
        <section
          style={{
            display: "grid",
            gap: "1em",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "1em 0em",
          }}
        >
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
          />
          <Input
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
          />
          <Input
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Enter Zip Code"
          />
        </section>

        <Input
          label="Business Address *"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          placeholder="Enter business address"
        />

        <div style={{ display: "grid", margin: "1em 0em" }}>
          <label htmlFor="businessDescription">Business Description</label>
          <textarea
            name="businessDescription"
            id="businessDescription"
            cols={30}
            rows={5}
            value={formData.businessDescription}
            onChange={handleChange}
            placeholder="Describe your business"
            style={{
              border: "1px solid lightgrey",
              borderRadius: "0.5em",
              padding: "0.25em 0.5em",
              margin: "0.2em 0em",
            }}
          ></textarea>
        </div>

        <div
          style={{
            margin: "1em 0em",
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
            style={{ marginRight: "1em", marginTop: "0.25em" }}
          />
          <label htmlFor="termsAndConditions">
            I agree to the Terms & Conditions <br />
            By checking this box, you agree to our vendor Terms, Conditions and
            Quality Standards
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
        >
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
    <div style={{ display: "grid" }}>
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
