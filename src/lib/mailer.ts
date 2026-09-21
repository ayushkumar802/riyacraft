import nodemailer from 'nodemailer';
import { EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, ADMIN_EMAIL } from '@/config/constant';

interface ContactEmailData {
    name: string;
    email: string;
    phone: string;
    city: string;
    projectType: string;
    budget: string;
    message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
    const user = process.env.EMAIL_HOST_USER || EMAIL_HOST_USER;
    const pass = process.env.EMAIL_HOST_PASSWORD || EMAIL_HOST_PASSWORD;
    const admin = process.env.ADMIN_EMAIL || ADMIN_EMAIL;

    console.log('Sending email via Nodemailer from:', user, 'to:', admin);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass,
        },
    });
    const htmlBody = `
        <h2>New Consultation Request — RiyaCrafts</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">City</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.city}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Project Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.projectType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Budget</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.budget}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.message}</td></tr>
        </table>
        <p style="margin-top: 16px; color: #888; font-size: 12px;">Sent from RiyaCrafts website contact form</p>
    `;

    await transporter.sendMail({
        from: `"RiyaCrafts Website" <${EMAIL_HOST_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: data.email,
        subject: `New Inquiry from ${data.name} — ${data.projectType}`,
        html: htmlBody,
    });
}
