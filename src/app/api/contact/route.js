import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to site owner
    await transporter.sendMail({
      from: `"AOS Wealth Builders Academy" <${process.env.GMAIL_USER}>`,
      to: "mdigital1196@gmail.com",
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1d4ed8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="background-color: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #6b7280; font-weight: 600; width: 100px;">Name:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111827;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #6b7280; font-weight: 600;">Subject:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111827;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-size: 14px; color: #6b7280; font-weight: 600; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation email to the sender
    await transporter.sendMail({
      from: `"AOS Wealth Builders Academy" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message — AOS Wealth Builders Academy",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1d4ed8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0;">Thank You, ${name}!</h1>
          </div>
          <div style="background-color: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 14px; color: #374151; line-height: 1.6;">
              We have received your message and will get back to you within 24 hours.
            </p>
            <p style="font-size: 14px; color: #374151; line-height: 1.6;">
              In the meantime, feel free to explore our 
              <a href="https://aoswealthbuildersacademy.com/blueprints" style="color: #1d4ed8; text-decoration: none; font-weight: 600;">Wealth Builder Blueprint Series</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #9ca3af;">
              AOS Wealth Builders Academy — Build. Fund. Acquire.
            </p>
          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
