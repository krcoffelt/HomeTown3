'use client';

import { FormEvent, useState } from 'react';
import { trackConversionEvent } from '@/lib/analytics';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactLeadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setSubmitState('error');
      return;
    }

    try {
      setSubmitState('submitting');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      trackConversionEvent('form_submit_contact', 'contact_page_form');
      setSubmitState('success');
      formElement.reset();
    } catch (_error) {
      setSubmitState('error');
    }
  };

  return (
    <form className="detail-panel cta-form contact-lead-form" id="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Project Details</h2>
      <p className="contact-lead-intro">Tell us what you need and we will reply with scope and next steps.</p>
      <p className="detail-note">
        Prefer to call?{' '}
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="contact_form_panel"
          className="text-link"
        >
          {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </p>
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" type="text" name="name" placeholder="Your name" required />
      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" type="email" name="email" placeholder="you@business.com" required />
      <label htmlFor="contact-company">Company (optional)</label>
      <input id="contact-company" type="text" name="company" placeholder="Business name" />
      <label htmlFor="contact-message">What do you need built?</label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        placeholder="Share services, timeline, and priorities."
        required
      />
      <button className="button primary" type="submit" disabled={submitState === 'submitting'}>
        {submitState === 'submitting' ? 'Submitting...' : 'Start My Website'}
      </button>
      {submitState === 'success' ? <p className="form-status success">Thanks, we will reach out shortly.</p> : null}
      {submitState === 'error' ? (
        <p className="form-status error">Something went wrong. Call us directly and we can get started now.</p>
      ) : null}
    </form>
  );
}
