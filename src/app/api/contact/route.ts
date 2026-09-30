import { NextResponse } from "next/server";

export interface ContactRequestBody {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
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

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "hello@tyrosoftdev.com";

    // If Resend API Key is provided in environment variables, dispatch email
    if (resendApiKey) {
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

        if (!emailRes.ok) {
          const errData = await emailRes.json();
          console.warn("Resend API warning:", errData);
        }
      } catch (emailErr) {
        console.error("Failed to send email via Resend:", emailErr);
      }
    } else {
      // In development mode without API key, log submission info
      console.log("Form Submission Received (Email dispatch ready):", {
        name,
        email,
        service,
        budget,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your inquiry has been received. Our senior team will reach out within 12 hours.",
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
