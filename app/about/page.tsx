'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Award, Users, Globe2, Rocket } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional results.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships based on trust and mutual growth.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, from code quality to user experience.',
  },
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'We create solutions that make a difference for businesses and communities worldwide.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Bonjour Agency was born with a vision to transform digital experiences.' },
  { year: '2019', title: 'First 100 Clients', description: 'Reached our first major milestone serving businesses across 10 countries.' },
  { year: '2021', title: 'AI Division Launch', description: 'Expanded into AI and machine learning solutions.' },
  { year: '2023', title: 'Global Expansion', description: 'Opened offices in 5 major cities and grew to 50+ team members.' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as a top digital agency with 500+ successful projects.' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '250+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
  { value: '30+', label: 'Countries Served' },
];

export default function AboutPage() {
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
            Building the Future<br />
            <span className="gradient-text">One Project at a Time</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a team of passionate innovators, designers, and developers dedicated to
            transforming businesses through exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex p-3 bg-black text-white rounded-lg mb-6">
                <Target size={32} />
              </div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance
                efficiency, and create meaningful connections with their audiences. We believe in
                the transformative power of technology and its ability to solve real-world challenges.
              </p>
            </div>

            <div>
              <div className="inline-flex p-3 bg-black text-white rounded-lg mb-6">
                <Eye size={32} />
              </div>
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To be the world&apos;s most trusted digital agency, known for delivering exceptional
                results and pushing the boundaries of what&apos;s possible. We envision a future where
                every business, regardless of size, has access to world-class digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect rounded-xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="inline-flex p-4 bg-white/10 rounded-xl mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startup to industry leader.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24">
                  <div className="text-3xl font-bold text-white/60">{milestone.year}</div>
                </div>
                <div className="flex-1 glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <Rocket size={48} className="mx-auto mb-6" />
            <h2 className="heading-lg mb-6">Why Bonjour?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re not just another digital agency. We&apos;re your strategic partner in growth.
              With a proven track record, cutting-edge expertise, and unwavering commitment to your
              success, we deliver solutions that don&apos;t just meet expectations—they exceed them.
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team combines technical excellence with creative innovation, ensuring every project
              is built to last and designed to scale. When you choose Bonjour, you&apos;re choosing a
              partner who genuinely cares about your success.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-white">
              Partner With Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something extraordinary.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
