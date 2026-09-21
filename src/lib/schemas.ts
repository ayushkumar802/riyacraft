import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  city: z
    .string()
    .min(2, 'Please enter your city')
    .max(100, 'City name is too long'),
  projectType: z
    .string()
    .min(1, 'Please select a project type'),
  budget: z
    .string()
    .min(1, 'Please select an approximate budget'),
  // in src/lib/schemas.ts (lines 25-28)
  message: z
    .string()
    .min(1, 'Please enter a message')
    .max(2000, 'Message must be under 2000 characters'),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const projectTypes = [
  'Custom Furniture Design',
  'Residential Furniture',
  'Commercial Furniture',
  'Modular Furniture',
  'Bespoke Furniture',
  '3D Furniture Visualization',
  'Furniture Consultation',
  'Other',
] as const;

export const budgetRanges = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  '₹2,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'Not sure yet',
] as const;
