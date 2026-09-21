'use server';

import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { sendContactEmail } from '@/lib/mailer';
import { SHEET_FETCH_URL, PROJECTS_SHEET_ID } from '@/config/constant';

export interface ContactFormResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactFormResult> {
  try {
    // Server-side validation
    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        message: 'Please check the form for errors and try again.',
      };
    }

    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return { success: true, message: 'Thank you for your inquiry.' };
    }

    // Sanitize input
    const sanitized = {
      name: sanitizeString(result.data.name),
      email: sanitizeString(result.data.email),
      phone: sanitizeString(result.data.phone),
      city: sanitizeString(result.data.city),
      projectType: sanitizeString(result.data.projectType),
      budget: sanitizeString(result.data.budget),
      message: sanitizeString(result.data.message),
    };

    console.log('📨 Server received contact form:', sanitized);

    // 1. Send email via Nodemailer
    await sendContactEmail(sanitized);
    console.log('✅ Server: Email sent successfully!');

    // 2. Append to Google Sheet (passing sheet ID)
    // 2. Append to Google Sheet in background (no await, so the user gets instant response)
    if (SHEET_FETCH_URL) {
      fetch(`${SHEET_FETCH_URL}?id=${PROJECTS_SHEET_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...sanitized,
          timestamp: new Date().toISOString(),
        }),
      }).catch((sheetErr) => {
        console.error('Google Sheet background log error:', sheetErr);
      });
    }

    return {
      success: true,
      message:
        'Thank you for your inquiry. We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.',
    };
  }
}

function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}
