import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
