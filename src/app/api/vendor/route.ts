import { connectToDatabase } from "@/lib/mongodb";
import Vendor from "@/models/Vendor";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

// Counter schema for sequential usernames
const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequenceValue: { type: Number, required: true },
});

const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

async function getNextSequence(sequenceName: string) {
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true }
  );
  return counter.sequenceValue;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectToDatabase();

    // Generate sequential username
    const seqNumber = await getNextSequence("vendorId");
    const username = `VN${seqNumber.toString().padStart(3, "0")}`;

    // Generate random 5-character password
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let tempPassword = "";
    for (let i = 0; i < 5; i++) {
      tempPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Create new vendor
    const newVendor = await Vendor.create({
      ...data,
      username,
      password: tempPassword,
    });

    // Send onboarding email (optional)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const vendorMailOptions = {
      from: process.env.EMAIL_USER,
      to: "nizam.vintage1@gmail.com", // or data.emailAddress
      subject: `New Client Onboarding: ${data.businessName}`,
      html: `
        <ul>
          <li><strong>Business Name:</strong> ${data.businessName}</li>
          <li><strong>Contact Person:</strong> ${data.contactPersonName}</li>
          <li><strong>Email Address:</strong> ${data.emailAddress}</li>
          <li><strong>Business Address:</strong> ${data.businessAddress}</li>
          <li><strong>City:</strong> ${data.city}</li>
          <li><strong>State:</strong> ${data.state}</li>
          <li><strong>Pincode:</strong> ${data.zipCode}</li>
          <li><strong>Business Type:</strong> ${data.businessType}</li>
          <li><strong>Description:</strong> ${data.businessDescription}</li>
          <li><strong>Username:</strong> ${username}</li>
          <li><strong>Password:</strong> ${tempPassword}</li>
        </ul>
      `,
    };

    await transporter.sendMail(vendorMailOptions);

    // Exclude sensitive fields like password when returning
    const { password, ...vendorData } = newVendor.toObject();

    return NextResponse.json({
      success: true,
      message: "Vendor registered successfully and credentials sent via email.",
      vendor: vendorData, // complete vendor info
    });
  } catch (error) {
    console.error("Error in /api/vendor route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save or send email" },
      { status: 500 }
    );
  }
}
