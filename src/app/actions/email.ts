"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactTemplate } from "@/components/emails/ContactTemplate";
import React from "react";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "salmabegam@mntfuture.com",
    pass: "haiq cgnc pyhg djks",
  },
});

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = formData;

    const emailHtml = await render(
      ContactTemplate({ name, email, subject, message }) as React.ReactElement
    );

    const mailOptions = {
      from: `"Pearl Realty Enquiry" <salmabegam@mntfuture.com>`,
      to: "salmabegam@mntfuture.com",
      subject: `New Institutional Enquiry: ${subject}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
