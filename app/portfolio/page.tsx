'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Code, ShoppingCart, Cpu, Share2 } from 'lucide-react';
import dynamic from 'next/dynamic';

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
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <FloatingCube />
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <h1 className="heading-xl mb-6">
            Our Work Speaks<br />
            <span className="gradient-text">For Itself</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that have transformed businesses
            and delivered exceptional results across industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <project.icon size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-400">{project.category}</span>
                    </div>

                    <h2 className="heading-sm mb-3">{project.title}</h2>
                    <p className="text-gray-500 mb-4">{project.client}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Results:</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={20} className="text-white/60 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="bg-gradient-to-br from-white/5 to-white/0 p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <project.icon size={120} className="text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Portfolio By Numbers</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$50M+</div>
              <div className="text-gray-600 font-medium">Client Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Start your project today.
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
