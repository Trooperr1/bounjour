'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Quote } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'CEO',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Bonjour transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 300%. The attention to detail and commitment to excellence is unmatched.',
    project: 'Web Development',
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'AI Innovations',
    rating: 5,
    text: 'Working with Bonjour on our AI solutions was a game-changer. They understood our vision and delivered beyond expectations. The predictive models they built are now core to our business.',
    project: 'AI Solutions',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'Restaurant Group',
    rating: 5,
    text: 'The POS system Bonjour developed for our restaurant chain has revolutionized our operations. Real-time inventory tracking across 15 locations has saved us countless hours and reduced costs by 40%.',
    project: 'POS Systems',
  },
  {
    name: 'David Thompson',
    role: 'Marketing Director',
    company: 'Fashion Brand',
    rating: 5,
    text: 'Our social media presence exploded after partnering with Bonjour. They grew our Instagram following from 10K to 500K in just 8 months. The ROI on our campaigns has been incredible.',
    project: 'Social Media',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO',
    company: 'FinTech Startup',
    rating: 5,
    text: 'Bonjour built our entire platform from the ground up. Their technical expertise, especially in security and scalability, gave us the confidence to handle rapid growth. Best decision we made.',
    project: 'Web Development',
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'E-commerce Platform',
    rating: 5,
    text: 'The AI-powered recommendation engine Bonjour developed increased our average order value by 60%. Their data science team is world-class, and their support has been exceptional.',
    project: 'AI Solutions',
  },
  {
    name: 'Lisa Anderson',
    role: 'Owner',
    company: 'Boutique Retail',
    rating: 5,
    text: 'As a small business owner, I was hesitant about the cost of a custom POS system. Bonjour delivered a solution that paid for itself in 6 months through improved efficiency and reduced shrinkage.',
    project: 'POS Systems',
  },
  {
    name: 'Robert Kim',
    role: 'Brand Manager',
    company: 'Tech Company',
    rating: 5,
    text: 'Bonjour\'s social media strategies are data-driven and results-oriented. They don\'t just post content—they build communities. Our engagement rates have tripled, and our brand awareness has skyrocketed.',
    project: 'Social Media',
  },
  {
    name: 'Amanda Foster',
    role: 'VP of Digital',
    company: 'Healthcare Provider',
    rating: 5,
    text: 'Working with Bonjour was seamless from start to finish. They delivered our patient portal on time, under budget, and with features we didn\'t even know we needed. Truly exceptional work.',
    project: 'Web Development',
  },
];

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '95%', label: 'Repeat Clients' },
  { value: '250+', label: 'Happy Clients' },
];

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <ParticleField />
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <h1 className="heading-xl mb-6">
            Trusted by Industry<br />
            <span className="gradient-text">Leaders Worldwide</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear what our clients have to say about
            working with Bonjour and the results we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                <Quote size={32} className="text-white/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-white text-white" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="font-bold mb-1">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-2">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={64} className="text-black/10 mx-auto mb-8" />
            <p className="text-3xl font-bold mb-8 leading-relaxed">
              &quot;Bonjour didn&apos;t just build us a website—they became a strategic partner in our growth.
              Their expertise, professionalism, and commitment to our success is why we continue to work
              with them on all our digital initiatives.&quot;
            </p>
            <div>
              <div className="font-bold text-xl mb-1">Alexandra Stevens</div>
              <div className="text-gray-600">CEO, Global Enterprises</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Become Our Next Success Story</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with Bonjour.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
