import { NextResponse } from "next/server";

export interface ContactRequestBody {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  access_key?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, service, budget, message } = body;

    // Server-side Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Please select a service of interest." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // 1. FREE WEB3FORMS INTEGRATION (No credit card or SMTP server needed)
    // Get a free access key at https://web3forms.com in 10 seconds for contact@tyrosoftdev.com
    const web3AccessKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@tyrosoftdev.com";

    let emailSent = false;

    // Try Web3Forms Free API if key is present
    if (web3AccessKey) {
      try {
        const web3res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3AccessKey,
            subject: `New Free Consultation Inquiry: ${service} - ${name}`,
            from_name: "Tyrosoft Dev Website",
            to_email: receiverEmail,
            name,
            email,
            service,
            budget: budget || "Not specified",
            message,
          }),
        });

        const web3Data = await web3res.json();
        if (web3Data.success) {
          emailSent = true;
        }
      } catch (wErr) {
        console.warn("Web3Forms dispatch warning:", wErr);
      }
    }

    // Try Resend API fallback if configured
    if (!emailSent && resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Tyrosoft Form <onboarding@resend.dev>",
            to: [receiverEmail],
            subject: `New Lead: ${service} Inquiry from ${name}`,
            html: `
              <h2>New Free Consultation Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Budget Range:</strong> ${budget || "Not Specified"}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (emailRes.ok) {
          emailSent = true;
        }
      } catch (resendErr) {
        console.warn("Resend API warning:", resendErr);
      }
    }

    // Console log backup for dev mode
    console.log("Form Submission Processed:", {
      name,
      email,
      service,
      budget,
      message,
      receiverEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your consultation inquiry has been received. Our team will reach out to " +
          email +
          " within 12 hours.",
        data: { name, email, service, budget },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
