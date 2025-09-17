import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      company,
      street,
      zipCode,
      townCity,
      email,
      telephone,
      country,
    } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Street:</strong> ${street}</p>
        <p><strong>ZIP:</strong> ${zipCode}</p>
        <p><strong>Town/City:</strong> ${townCity}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
