'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

const services = [
  'Web Development',
  'POS Systems',
  'AI Solutions',
  'Social Media Management',
  'Mobile Development',
  'E-commerce',
  'Consulting',
  'Other',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingMode, setBookingMode] = useState<'form' | 'calendar'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative overflow-hidden pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background opacity-30" />
        <Suspense fallback={<div />}>
          <div className="absolute inset-0 opacity-10">
            <Scene3D />
          </div>
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <h1 className="heading-xl mb-6 text-white">
            Let&apos;s Build<br />
            <span className="gradient-text text-shadow-glow">Something Great Together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch or book a free consultation call.
          </p>
        </div>
      </section>

      {/* Contact Methods Toggle */}
      <section className="section-container">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setBookingMode('form')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              bookingMode === 'form'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Send Message
          </button>
          <button
            onClick={() => setBookingMode('calendar')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${
              bookingMode === 'calendar'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Calendar size={18} />
            Book a Call
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-8 text-white">Get In Touch</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Have a project in mind? We&apos;d love to hear from you. {bookingMode === 'form' ? 'Send us a message' : 'Book a free consultation'} and
                we&apos;ll respond within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email</h3>
                    <a href="mailto:hello@bonjour.agency" className="text-gray-400 hover:text-white transition-colors">
                      hello@bonjour.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Office</h3>
                    <p className="text-gray-400">
                      123 Innovation Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-white" />
                  <h3 className="font-bold text-white">Business Hours</h3>
                </div>
                <p className="text-gray-400 mb-1">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p className="text-gray-400">Weekend: By appointment</p>
              </div>
            </div>

            {/* Contact Form or Calendar Booking */}
            <div className="glass-effect rounded-2xl p-8 lg:p-12">
              {bookingMode === 'form' ? (
                submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Thank You!</h3>
                    <p className="text-gray-300">
                      Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-gray-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-gray-500"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-gray-500"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white"
                        >
                          <option value="" className="bg-black">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-black">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2 text-white">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors text-white"
                        >
                          <option value="" className="bg-black">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-black">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none text-white placeholder:text-gray-500"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                      Send Message
                      <Send size={20} />
                    </button>
                  </form>
                )
              ) : (
                /* Calendar Booking UI */
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Calendar size={48} className="mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2 text-white">Book a Free Consultation</h3>
                    <p className="text-gray-400">Choose a time that works best for you</p>
                  </div>

                  {/* Placeholder for Google Calendar Integration */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                    <p className="text-gray-400 mb-6">
                      Google Calendar integration will be set up here.
                      You can use Calendly, Google Calendar API, or similar booking tools.
                    </p>

                    {/* Simulated Time Slots */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {timeSlots.slice(0, 6).map((time) => (
                        <button
                          key={time}
                          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-white text-sm"
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <Link
                      href="https://calendly.com"
                      target="_blank"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Calendar size={18} />
                      Connect Your Calendar
                    </Link>

                    <p className="text-xs text-gray-500 mt-4">
                      Setup: Connect your Google Calendar, Calendly, or Cal.com account
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
