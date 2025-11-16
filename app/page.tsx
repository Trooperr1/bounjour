'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, ShoppingCart, Share2, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and applications built with cutting-edge technologies.',
    href: '/services/web-development',
  },
  {
    icon: ShoppingCart,
    title: 'POS Systems',
    description: 'Advanced point-of-sale solutions that streamline operations.',
    href: '/services/pos-systems',
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered tools for your business.',
    href: '/services/ai-solutions',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Comprehensive strategies that build your brand and audience.',
    href: '/services/social-media',
  },
];

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '250+', label: 'Clients' },
  { value: '98%', label: 'Satisfaction' },
  { value: '30+', label: 'Countries' },
];

const projects = [
  { title: 'E-commerce Platform', category: 'Web Development', color: 'bg-blue-50' },
  { title: 'AI Analytics Dashboard', category: 'AI Solutions', color: 'bg-purple-50' },
  { title: 'Restaurant POS System', category: 'POS Systems', color: 'bg-green-50' },
  { title: 'Social Media Campaign', category: 'Marketing', color: 'bg-pink-50' },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-8 animate-fade-in">
              <Sparkles size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Digital Agency</span>
            </div>

            <h1 className="heading-xl mb-6 animate-slide-up">
              We Create Digital<br />
              Experiences That <span className="gradient-text">Matter</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '100ms'}}>
              A creative agency specializing in web development, AI solutions, and digital transformation for forward-thinking businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '200ms'}}>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-200 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <h2 className="heading-lg mb-6">What We Do</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive digital solutions tailored to help your business thrive in the modern landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-gray-900 transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <h2 className="heading-lg mb-4">Featured Work</h2>
              <p className="text-lg text-gray-600">
                A selection of projects that showcase our expertise and creativity.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2 self-start">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href="/portfolio"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-900 transition-all duration-300 card-hover"
              >
                <div className={`${project.color} h-64 flex items-center justify-center`}>
                  <span className="text-6xl font-bold text-gray-300">
                    {index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center bg-gray-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create something extraordinary. Get in touch with our team today.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all">
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
