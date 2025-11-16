'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Code, ShoppingCart, Cpu, Share2, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const services = [
  {
    icon: Code,
    title: 'Web Development',
    tagline: 'Build Your Digital Presence',
    description: 'Transform your ideas into stunning, high-performance websites and web applications that captivate users and drive results.',
    href: '/services/web-development',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development & Integration',
      'Performance Optimization',
      'Responsive Design',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: ShoppingCart,
    title: 'POS Systems',
    tagline: 'Streamline Your Operations',
    description: 'Modern, cloud-based point-of-sale solutions designed to enhance efficiency, reduce costs, and improve customer satisfaction.',
    href: '/services/pos-systems',
    features: [
      'Cloud-Based Infrastructure',
      'Real-time Inventory Management',
      'Multi-location Support',
      'Advanced Analytics & Reporting',
      'Payment Processing Integration',
      'Customer Relationship Management',
    ],
    technologies: ['Cloud Computing', 'Real-time Data', 'Mobile POS', 'Analytics'],
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    tagline: 'Harness the Power of Intelligence',
    description: 'Leverage cutting-edge artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.',
    href: '/services/ai-solutions',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Process Automation',
      'Chatbots & Virtual Assistants',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Custom ML Models'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    tagline: 'Amplify Your Brand',
    description: 'Strategic social media management that builds communities, drives engagement, and amplifies your brand message across all platforms.',
    href: '/services/social-media',
    features: [
      'Content Strategy & Planning',
      'Multi-platform Management',
      'Community Engagement',
      'Analytics & Insights',
      'Influencer Collaboration',
      'Paid Advertising Campaigns',
    ],
    technologies: ['Social Analytics', 'Content Management', 'Ad Platforms', 'Automation'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and challenges.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our experts craft a tailored strategy to achieve your objectives.',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'We bring your vision to life with precision and excellence.',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuous improvement to ensure maximum results and ROI.',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <ParticleField />
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-medium">Premium Services</span>
          </div>
          <h1 className="heading-xl mb-6">
            Services That Drive<br />
            <span className="gradient-text">Exceptional Results</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From innovative web development to intelligent AI solutions, we deliver
            comprehensive digital services that transform businesses and create lasting impact.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex p-4 bg-white/10 rounded-xl mb-6">
                    <service.icon size={40} className="text-white" />
                  </div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-400 mb-6 font-medium">{service.tagline}</p>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-white/60 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3 font-medium">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="glass-effect rounded-2xl p-12 aspect-square flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <service.icon size={200} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your business goals.
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
