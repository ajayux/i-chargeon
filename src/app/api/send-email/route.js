import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { category, organization, fullName, email, phoneNumber, message } = await req.json();
  console.log("API /api/send-email called with data:", { category, organization, fullName, email, phoneNumber, message });

  if (!email || !phoneNumber || (category === "organization" && !organization) || (category === "individual" && !fullName)) {
    console.error("Missing required fields");
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const nameField = category === "organization" ? organization : fullName;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "your-receiving-email@example.com",
    subject: `New Enquiry from ${nameField}`,
    text: `
      Category: ${category}
      ${category === "organization" ? "Organization" : "Full Name"}: ${nameField}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message || "No message provided"}
    `,
    html: `
      <h2>New Enquiry</h2>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>${category === "organization" ? "Organization" : "Full Name"}:</strong> ${nameField}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Message:</strong> ${message || "No message provided"}</p>
    `,
  };

  try {
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
  }
}
