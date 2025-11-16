'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Code, ArrowRight, CheckCircle, Smartphone, Zap, Search, Globe, ShoppingBag, Database } from 'lucide-react';
import dynamic from 'next/dynamic';

const FloatingCube = dynamic(() => import('@/components/3d/FloatingCube'), { ssr: false });

const offerings = [
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description: 'Scalable, high-performance web applications tailored to your unique business needs.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with secure payment processing and inventory management.',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'App-like experiences that work seamlessly across all devices and platforms.',
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs for seamless integration and data exchange.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Built-in SEO best practices to maximize your online visibility and reach.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and optimal user experience across all devices.',
  },
];

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Go', 'Ruby', '.NET'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'] },
];

const benefits = [
  'Responsive design that looks perfect on all devices',
  'Fast loading times for better user experience',
  'Secure, scalable architecture built to grow',
  'SEO-optimized for maximum visibility',
  'Modern, intuitive user interfaces',
  'Cross-browser compatibility guaranteed',
  'Accessibility standards compliance',
  'Ongoing support and maintenance',
];

const caseStudies = [
  {
    title: 'E-commerce Platform Redesign',
    client: 'Fashion Retailer',
    result: '300% increase in online sales',
    description: 'Complete platform overhaul with modern UI/UX and optimized checkout flow.',
  },
  {
    title: 'Corporate Website Development',
    client: 'Tech Startup',
    result: '5x increase in lead generation',
    description: 'Custom website with integrated CRM and analytics dashboard.',
  },
  {
    title: 'Progressive Web App',
    client: 'Food Delivery Service',
    result: '50% faster load times',
    description: 'App-like experience with offline functionality and push notifications.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[70vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <FloatingCube />
        </Suspense>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
                <Code size={16} />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <h1 className="heading-xl mb-6">
                Build Exceptional<br />
                <span className="gradient-text">Web Experiences</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your digital presence with cutting-edge web applications that captivate users,
                drive engagement, and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-effect rounded-2xl p-8 space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="h-3 bg-white/20 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-white/10 rounded w-full mb-2" />
                  <div className="h-3 bg-white/10 rounded w-5/6" />
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="h-3 bg-white/20 rounded w-2/3 mb-3" />
                  <div className="h-3 bg-white/10 rounded w-full mb-2" />
                  <div className="h-3 bg-white/10 rounded w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="inline-flex p-3 bg-black text-white rounded-lg mb-4">
                  <offering.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest and most powerful technologies to build exceptional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-white/80">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
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
              <h2 className="heading-lg mb-6">Why Choose Our Web Development Services?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We deliver more than just code—we create digital experiences that drive business growth.
              </p>
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

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results for real businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-colors">
                <div className="text-sm text-gray-500 mb-2">{study.client}</div>
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{study.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-white">{study.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View Full Portfolio
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Our team is standing by to bring your vision to life.
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
