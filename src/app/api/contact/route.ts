import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, emailAdd, phoneNumber, inquiryType, subject, message } =
      await req.json();

    // creating transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: emailAdd,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${fullName}: ${subject}`,
      text: `
        Name: ${fullName}
        Email: ${emailAdd}
        Phone: ${phoneNumber}
        Inquiry Type: ${inquiryType}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({success: true, message: "Email Sent Suffessfully" }, { status: 200 } );

  } catch (error) {
        console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });

  }
}
