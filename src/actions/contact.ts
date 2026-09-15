'use server';

import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';

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
      // Silently succeed for bots
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

    // Log the submission (placeholder for email service integration)
    console.log('📧 New contact form submission:', {
      timestamp: new Date().toISOString(),
      ...sanitized,
    });

    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // await sendEmail({
    //   to: siteConfig.email,
    //   subject: `New inquiry from ${sanitized.name}`,
    //   body: formatEmailBody(sanitized),
    // });

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
