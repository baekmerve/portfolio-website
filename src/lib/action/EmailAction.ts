/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { Resend } from "resend";
import { NewEmailTemplate } from "@/components/template/EmailTemplate";
import { formSchema } from "../types/form-schema";
import { DataState } from "../types/types";

export async function sendEmail(
  _prevState: DataState,
  formData: FormData
): Promise<DataState> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const sender = formData.get("sender") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;

  try {
    const validatedFields = formSchema.safeParse({ sender, email, content });

    if (!validatedFields.success) {
      return {
        failMessage: "Validation failed",
        successMessage: "",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: process.env.TO_EMAIL as string,
      subject: `Message from portfolio Website - ${email}`,
      react: NewEmailTemplate({
        sender,
        email,
        content,
      }) as React.ReactElement,
    });

    if (error) {
      return {
        failMessage: "Failed to send email",
        successMessage: "",
        errors: {},
      };
    }

    return {
      successMessage: "Email sent successfully",
      failMessage: "",
      errors: {},
    };
  } catch (error) {
    return {
      failMessage: "Oops! Something went wrong. Please try again.",
      successMessage: "",
      errors: {},
    };
  }
}
