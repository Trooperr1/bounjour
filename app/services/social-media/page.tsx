'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Share2, ArrowRight, CheckCircle, TrendingUp, Users, Target, MessageCircle, Calendar, BarChart3 } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

const services = [
  {
    icon: Calendar,
    title: 'Content Strategy & Planning',
    description: 'Develop comprehensive content calendars aligned with your brand and business goals.',
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'Engage with your audience, respond to comments, and build loyal communities.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track performance metrics and gain insights to optimize your social strategy.',
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Run targeted ad campaigns to reach the right audience and maximize ROI.',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Connect with relevant influencers to amplify your brand reach and credibility.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategies',
    description: 'Implement proven tactics to grow your following and increase engagement.',
  },
];

const platforms = [
  { name: 'Instagram', users: '2B+ users' },
  { name: 'Facebook', users: '3B+ users' },
  { name: 'LinkedIn', users: '900M+ users' },
  { name: 'Twitter/X', users: '500M+ users' },
  { name: 'TikTok', users: '1B+ users' },
  { name: 'YouTube', users: '2.5B+ users' },
];

const benefits = [
  'Increase brand awareness and visibility',
  'Drive website traffic and conversions',
  'Build authentic relationships with customers',
  'Generate high-quality leads',
  'Establish thought leadership in your industry',
  'Improve customer service and satisfaction',
  'Stay ahead of competitors',
  'Create viral content that resonates',
];

const results = [
  {
    metric: '300%',
    label: 'Average Engagement Increase',
    description: 'Our clients see significant growth in likes, comments, and shares.',
  },
  {
    metric: '5x',
    label: 'ROI on Ad Spend',
    description: 'Strategic campaigns deliver exceptional return on investment.',
  },
  {
    metric: '50K+',
    label: 'Followers Generated',
    description: 'We\'ve helped clients build massive, engaged audiences.',
  },
  {
    metric: '95%',
    label: 'Client Satisfaction',
    description: 'Our proven strategies consistently deliver results.',
  },
];

export default function SocialMediaPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[70vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <Scene3D />
        </Suspense>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Share2 size={16} />
              <span className="text-sm font-medium">Social Media Management</span>
            </div>
            <h1 className="heading-xl mb-6">
              Amplify Your Brand<br />
              <span className="gradient-text">Across All Platforms</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Strategic social media management that builds communities, drives engagement,
              and transforms followers into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Grow Your Presence
                <ArrowRight size={20} />
              </Link>
              <Link href="#services" className="btn-secondary inline-flex items-center justify-center gap-2">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Comprehensive Social Media Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed on social media.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="inline-flex p-3 bg-black text-white rounded-lg mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">We Manage All Major Platforms</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reach your audience wherever they are.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.users}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Why Social Media Matters</h2>
              <p className="text-xl text-gray-600 mb-8">
                Social media is where your customers spend their time. Be there, be relevant, be engaging.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-white">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle size={24} className="text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Proven Results</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Data-driven strategies that deliver measurable success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="glass-effect rounded-xl p-8 text-center">
                <div className="text-5xl font-bold mb-3">{result.metric}</div>
                <div className="text-lg font-semibold mb-2">{result.label}</div>
                <p className="text-gray-400 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Ready to Dominate Social Media?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a social media strategy that elevates your brand and drives real business results.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Let&apos;s Talk Strategy
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
