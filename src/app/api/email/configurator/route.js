
import nodemailer from "nodemailer";
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { formData, craneType } = await request.json()
// 
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
       auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Prepare email content
    const technicalSpecs = Object.entries(formData)
      .filter(([key]) => !["CUSTOMER_NAME", "CONTACT_NUMBER", "EMAIL"].includes(key))
      .map(([key, value]) => `${key.replace(/_/g, " ")}: ${value}`)
      .join("\n")

    const emailContent = `
New crane specification request received:

Crane Type: ${craneType}

Technical Specifications:
${technicalSpecs}

Customer Details:
Name: ${formData.CUSTOMER_NAME}
Contact: ${formData.CONTACT_NUMBER}
Email: ${formData.EMAIL}

Please follow up with this customer for their crane requirements.
    `

    // Send email to company
    await transporter.sendMail({
      from: `"Configurator Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `New Crane Specification Request - ${craneType}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    })

    // Send confirmation email to customer
    const customerEmailContent = `
Dear ${formData.CUSTOMER_NAME},

Thank you for your crane specification request. We have received your inquiry for a ${craneType} and our technical team will review your requirements.

Your Request Details:
${technicalSpecs}

Our team will contact you within 24 hours at ${formData.CONTACT_NUMBER} or via email to discuss your requirements in detail.

Best regards,
Industrial Crane Solutions Team
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: formData.EMAIL,
      subject: `Crane Specification Request Confirmation - ${craneType}`,
      text: customerEmailContent,
      html: customerEmailContent.replace(/\n/g, "<br>"),
    })

    return NextResponse.json({ success: true, message: "Emails sent successfully" })
  } catch (error) {
    console.error("Email sending failed:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
