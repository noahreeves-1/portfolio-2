'use server';

import { EmailTemplate } from "@/app/components/features/email";
import { Resend } from "resend";
import { isValidEmail } from "@/app/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendContactEmail(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return {
        success: false,
        error: "Configuration error. Please try again later."
      };
    }

    if (!process.env.MY_EMAIL) {
      console.error("Missing MY_EMAIL");
      return {
        success: false,
        error: "Configuration error. Please try again later."
      };
    }

    // Extract and validate form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all fields."
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        error: "Please enter a valid email address."
      };
    }

    if (message.length < 10) {
      return {
        success: false,
        error: "Message must be at least 10 characters long."
      };
    }

    // Send email
    try {
      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
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
        return {
          success: false,
          error: "Failed to send message. Please try again."
        };
      }

      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      };
    } catch (resendError) {
      console.error("Resend API call failed:", resendError);
      return {
        success: false,
        error: "Failed to send message. Please try again."
      };
    }
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again."
    };
  }
}