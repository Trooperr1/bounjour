'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, ShoppingCart, Cpu, Share2, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';

const FloatingCube = dynamic(() => import('@/components/3d/FloatingCube'), { ssr: false });

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    category: 'Web Development',
    icon: Code,
    client: 'Fashion Retailer',
    description: 'Complete overhaul of an online fashion store with modern UI/UX, optimized checkout flow, and AI-powered product recommendations.',
    results: ['300% increase in conversions', '50% faster page load times', '45% reduction in cart abandonment'],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'TensorFlow'],
    image: 'E-commerce',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI Solutions',
    icon: Cpu,
    client: 'SaaS Startup',
    description: 'Developed a comprehensive analytics platform with machine learning insights, predictive analytics, and real-time data visualization.',
    results: ['10x faster data processing', 'Predictive accuracy of 95%', '70% reduction in manual reporting'],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    image: 'Analytics',
  },
  {
    title: 'Cloud POS System',
    category: 'POS Systems',
    icon: ShoppingCart,
    client: 'Restaurant Chain',
    description: 'Multi-location cloud-based POS system with real-time inventory management, staff scheduling, and advanced reporting.',
    results: ['99.9% uptime achieved', '40% faster checkout times', '25% reduction in operational costs'],
    technologies: ['Node.js', 'React Native', 'MongoDB', 'AWS'],
    image: 'POS System',
  },
  {
    title: 'Social Media Campaign Management',
    category: 'Social Media',
    icon: Share2,
    client: 'Tech Brand',
    description: 'Comprehensive social media strategy with content creation, community management, and paid advertising across all major platforms.',
    results: ['500% follower growth', '8x engagement increase', '200% ROI on ad spend'],
    technologies: ['Social Analytics', 'Content Management', 'Ad Platforms'],
    image: 'Social Media',
  },
  {
    title: 'Corporate Website Development',
    category: 'Web Development',
    icon: Code,
    client: 'Financial Services Firm',
    description: 'Enterprise-grade website with integrated CRM, client portal, secure document sharing, and compliance features.',
    results: ['500% increase in lead generation', 'AAA security rating', '60% faster client onboarding'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'Corporate',
  },
  {
    title: 'Chatbot AI Assistant',
    category: 'AI Solutions',
    icon: Cpu,
    client: 'E-learning Platform',
    description: 'Intelligent chatbot with natural language processing to assist students, answer questions, and provide personalized learning recommendations.',
    results: ['90% customer query resolution', '24/7 availability', '80% reduction in support costs'],
    technologies: ['OpenAI GPT', 'Python', 'FastAPI', 'React'],
    image: 'Chatbot',
  },
];

const categories = ['All', 'Web Development', 'AI Solutions', 'POS Systems', 'Social Media'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative overflow-hidden pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background opacity-30" />
        <Suspense fallback={<div />}>
          <div className="absolute inset-0 opacity-10">
            <FloatingCube />
          </div>
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 animate-fade-in">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-medium text-white">Premium Portfolio</span>
          </div>

          <h1 className="heading-xl mb-6 text-white">
            Our Work Speaks<br />
            <span className="gradient-text text-shadow-glow">For Itself</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that have transformed businesses
            and delivered exceptional results across industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black scale-105'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                    {category === 'All' ? projects.length : projects.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-12">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  index={index}
                />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Portfolio By Numbers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve accomplished for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                500+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                98%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                30+
              </div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                $50M+
              </div>
              <div className="text-gray-600 font-medium">Client Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-20" />

            <div className="relative z-10">
              <h2 className="heading-lg mb-6 text-white">Your Project Could Be Next</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s create something amazing together. Start your project today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
