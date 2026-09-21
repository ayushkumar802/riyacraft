'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2 } from 'lucide-react';
import { contactFormSchema, type ContactFormValues, projectTypes, budgetRanges } from '@/lib/schemas';
import { submitContactForm, type ContactFormResult } from '@/actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<ContactFormResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log('Submitting contact form:', data);
    setIsSubmitting(true);
    setStatus(null);
    try {
      const result = await submitContactForm(data);
      console.log('Server action result:', result);
      setStatus(result);
      if (result.success) {
        reset();
      }
    } catch (err) {
      console.error('Client submit error:', err);
      setStatus({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 👇 ADD IT RIGHT HERE (above the return statement)
  if (status?.success) {
    return (
      <div
        className="p-4 p-md-5 text-center"
        style={{
          background: 'var(--color-bg-alt)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
        }}
      >
        <h3 style={{ color: 'var(--color-success)', marginBottom: '1rem' }}>
          ✓ Message Received!
        </h3>
        <p style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
          {status.message}
        </p>
        <button
          type="button"
          onClick={() => setStatus(null)}
          className="btn btn-outline-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
    >

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="contact-name" className="form-label">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Your full name"
            {...register('name')}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="contact-email" className="form-label">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="your@email.com"
            {...register('email')}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="contact-phone" className="form-label">
            Phone / WhatsApp *
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="+1 234 567 890"
            {...register('phone')}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="contact-city" className="form-label">
            City *
          </label>
          <input
            id="contact-city"
            type="text"
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            placeholder="Your city"
            {...register('city')}
          />
          {errors.city && (
            <div className="invalid-feedback">{errors.city.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="contact-project-type" className="form-label">
            Project Type *
          </label>
          <select
            id="contact-project-type"
            className={`form-select ${errors.projectType ? 'is-invalid' : ''}`}
            {...register('projectType')}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <div className="invalid-feedback">{errors.projectType.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="contact-budget" className="form-label">
            Approximate Budget *
          </label>
          <select
            id="contact-budget"
            className={`form-select ${errors.budget ? 'is-invalid' : ''}`}
            {...register('budget')}
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <div className="invalid-feedback">{errors.budget.message}</div>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="contact-message" className="form-label">
            Message *
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            placeholder="Tell us about your project — what you need, the space, your timeline, any ideas you have…"
            {...register('message')}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        {/* Honeypot */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('honeypot')}
          />
        </div>

        <div className="col-12 mt-4">
          <button
            type="button"
            onClick={handleSubmit(onSubmit, (errs) => {
              console.warn('Form validation failed:', errs);
            })}
            className="btn btn-primary btn-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="me-2 spin-loader" />
                Sending…
              </>
            ) : (
              <>
                <Send size={18} className="me-2" />
                Request a Consultation
              </>
            )}
          </button>
        </div>

      </div>
    </form>
  );
}
