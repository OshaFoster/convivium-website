'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error('Subscription error:', data);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-warm-cream">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-neutral-900 mb-4">
            Join the Gathering
          </h2>
          <p className="text-xl font-light text-neutral-600">
            Subscribe to receive updates on new music, events, and reflections
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gold to-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-gold to-gold"></div>
          </div>
        </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={200}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-light text-neutral-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-light text-neutral-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-12 py-3 text-white font-light text-base rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#0a729f' }}
              onMouseEnter={(e) => !status && (e.currentTarget.style.backgroundColor = '#d4af37')}
              onMouseLeave={(e) => !status && (e.currentTarget.style.backgroundColor = '#0a729f')}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-center">
              <p className="text-sky-700 font-light">
                Welcome to the gathering! Check your email to confirm your subscription.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
              <p className="text-red-700 font-light">
                Something went wrong. Please try again.
              </p>
            </div>
          )}
        </form>
        </ScrollReveal>

        {/* Privacy Note */}
        <p className="text-sm text-neutral-500 text-center mt-8 font-light">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
