'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, CheckCircle, Cloud, BarChart3, CreditCard, Package, Users, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

const features = [
  {
    icon: Cloud,
    title: 'Cloud-Based Platform',
    description: 'Access your POS system from anywhere, anytime with our secure cloud infrastructure.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Make data-driven decisions with comprehensive real-time reporting and insights.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept all major payment methods with secure, fast, and reliable processing.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track stock levels, manage suppliers, and automate reordering effortlessly.',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Build customer profiles, track purchase history, and run loyalty programs.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your business never stops.',
  },
];

const benefits = [
  'Increase sales with faster checkout times',
  'Reduce errors with automated inventory tracking',
  'Improve customer satisfaction with shorter wait times',
  'Make informed decisions with real-time data',
  'Scale effortlessly across multiple locations',
  'Integrate seamlessly with existing systems',
  'Reduce hardware costs with cloud-based solution',
  'Access your data securely from any device',
];

const industries = [
  { name: 'Retail', description: 'Perfect for clothing, electronics, and general merchandise stores' },
  { name: 'Restaurants', description: 'Optimized for quick service, fine dining, and cafes' },
  { name: 'Hospitality', description: 'Ideal for hotels, resorts, and event venues' },
  { name: 'Healthcare', description: 'HIPAA-compliant solutions for clinics and pharmacies' },
  { name: 'Salon & Spa', description: 'Appointment scheduling and service management' },
  { name: 'Grocery', description: 'High-volume transaction processing with inventory control' },
];

export default function POSSystemsPage() {
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
              <ShoppingCart size={16} />
              <span className="text-sm font-medium">POS Systems</span>
            </div>
            <h1 className="heading-xl mb-6">
              Modern POS Solutions<br />
              <span className="gradient-text">That Scale With You</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Streamline operations, boost efficiency, and deliver exceptional customer experiences
              with our cloud-based point-of-sale systems designed for the modern business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight size={20} />
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center justify-center gap-2">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your business efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="inline-flex p-3 bg-black text-white rounded-lg mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Transform Your Business Operations</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our POS system is designed to help you work smarter, not harder.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 glass-effect rounded-lg p-4">
                  <CheckCircle size={24} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Built for Your Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for businesses across all sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-transparent hover:border-black transition-colors">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10M+</div>
                <div className="text-gray-400">Transactions/Month</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <div className="text-gray-400">Active Businesses</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Ready to Upgrade Your POS System?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our POS solution to power their operations.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
