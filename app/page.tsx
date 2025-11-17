'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, ShoppingCart, Share2, Sparkles, Calendar, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';
import EnhancedBackground from '@/components/EnhancedBackground';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });
const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });
const GradientOrb = dynamic(() => import('@/components/3d/GradientOrb'), { ssr: false });

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and applications built with cutting-edge technologies for maximum performance.',
    href: '/services/web-development',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: ShoppingCart,
    title: 'POS Systems',
    description: 'Advanced point-of-sale solutions that streamline operations and enhance customer experience.',
    href: '/services/pos-systems',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered tools to transform your business operations.',
    href: '/services/ai-solutions',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Comprehensive social media strategies that build your brand and engage your audience.',
    href: '/services/social-media',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '250+', label: 'Happy Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '30+', label: 'Countries Served' },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Hero Section with Enhanced 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-background opacity-20" />

        {/* 3D Background */}
        <Suspense fallback={<div className="w-full h-full" />}>
          <div className="absolute inset-0 opacity-30">
            <Scene3D />
          </div>
        </Suspense>

        {/* Floating Particles */}
        <Suspense fallback={<div />}>
          <div className="absolute inset-0 opacity-10">
            <ParticleField />
          </div>
        </Suspense>

        <div className="relative section-container text-center z-10 pt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect mb-6 animate-fade-in border border-white/20">
              <Sparkles size={16} className="text-white animate-pulse" />
              <span className="text-sm font-medium text-white">Premium Digital Solutions</span>
            </div>

            {/* Main Heading with Glow */}
            <h1 className="heading-xl text-white animate-slide-up">
              Transform Your Business<br />
              With <span className="gradient-text text-shadow-glow bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text">Exceptional</span> Digital Experiences
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              We craft cutting-edge websites, AI solutions, and digital platforms that drive growth,
              innovation, and success for forward-thinking businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up animation-delay-400">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                <Calendar size={18} />
                Book a Free Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2 group">
                View Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Orb */}
      <section className="section-padding border-y border-white/10 relative overflow-hidden">
        {/* 3D Orb Background */}
        <Suspense fallback={<div />}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
            <GradientOrb />
          </div>
        </Suspense>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-6xl font-bold text-white mb-3 group-hover:scale-110 smooth-transition group-hover:text-shadow-glow">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Backgrounds */}
      <section className="section-padding relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-10" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Zap size={16} className="text-white" />
              <span className="text-sm font-medium text-white">What We Offer</span>
            </div>
            <h2 className="heading-lg mb-6 text-white">Our Services</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive digital solutions designed to elevate your business to new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative glass-effect rounded-2xl p-8 lg:p-10 hover:bg-white/10 card-hover overflow-hidden"
              >
                {/* Service Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-white/10 rounded-xl group-hover:bg-white group-hover:text-black smooth-transition backdrop-blur-xl">
                    <service.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-shadow-glow smooth-transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 smooth-transition">
                      Explore Service
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2 group">
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Elements */}
      <section className="section-padding relative overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={<div />}>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-15">
            <GradientOrb />
          </div>
        </Suspense>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-12 lg:p-20 border border-white/20 relative overflow-hidden">
            {/* Card Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

            <div className="relative z-10">
              <h2 className="heading-lg mb-6 text-white">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to create something extraordinary. Book a free consultation with our team today.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group text-base">
                <Calendar size={20} />
                Schedule Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
