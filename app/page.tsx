'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, ShoppingCart, Share2, Zap, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });
const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for maximum performance and scalability.',
    href: '/services/web-development',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized'],
  },
  {
    icon: ShoppingCart,
    title: 'POS Systems',
    description: 'Advanced point-of-sale solutions that streamline operations and enhance customer experience.',
    href: '/services/pos-systems',
    features: ['Cloud-Based', 'Real-time Analytics', 'Multi-location'],
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered tools to transform your business operations and decision-making.',
    href: '/services/ai-solutions',
    features: ['Machine Learning', 'Automation', 'Predictive Analytics'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Comprehensive social media strategies that build your brand and engage your audience.',
    href: '/services/social-media',
    features: ['Content Strategy', 'Analytics', 'Community Management'],
  },
];

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '250+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Countries Served', value: '30+' },
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices and platforms.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures to protect your data and users.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business, from startup to enterprise.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals committed to your success.',
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div className="w-full h-full" />}>
          <Scene3D />
        </Suspense>

        <div className="relative section-container text-center z-10 pt-20">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <h1 className="heading-xl gradient-text">
              Transform Your Business<br />With Premium Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We craft exceptional digital experiences that drive growth, innovation, and success.
              From web development to AI solutions, we&apos;re your partner in digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 grid-background opacity-50" />
        <Suspense fallback={<div />}>
          <ParticleField />
        </Suspense>

        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business to new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-shadow-glow transition-all">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle size={16} className="text-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                      Learn More
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 text-black">Why Choose Bonjour?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence through innovation, expertise, and dedication to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-black text-white rounded-xl mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        <div className="section-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 lg:p-16">
            <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something extraordinary. Our team is ready to bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
