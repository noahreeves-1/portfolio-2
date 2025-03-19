import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY environment variable" },
        { status: 500 }
      );
    }

    if (!process.env.MY_EMAIL) {
      return Response.json(
        { error: "Missing MY_EMAIL environment variable" },
        { status: 500 }
      );
    }

    // Extract form data from request
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: [process.env.MY_EMAIL as string],
      subject: `New contact from ${name}`,
      react: await EmailTemplate({
        name,
        message,
        from_email: email,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
