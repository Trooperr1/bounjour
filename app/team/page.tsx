'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

const team = [
  {
    name: 'Alex Thompson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in digital innovation. Former tech lead at Fortune 500 companies.',
    expertise: ['Strategy', 'Leadership', 'Innovation'],
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect passionate about cutting-edge tech. MIT graduate with expertise in AI/ML.',
    expertise: ['AI/ML', 'Architecture', 'Full-Stack'],
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    bio: 'Award-winning designer focused on creating exceptional user experiences that drive results.',
    expertise: ['UI/UX', 'Branding', 'Product Design'],
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead AI Engineer',
    bio: 'PhD in Machine Learning. Specializes in building intelligent systems that solve real-world problems.',
    expertise: ['Machine Learning', 'Deep Learning', 'NLP'],
  },
  {
    name: 'David Kim',
    role: 'Senior Full-Stack Developer',
    bio: '10+ years building scalable web applications. Expert in modern JavaScript frameworks.',
    expertise: ['React', 'Node.js', 'Cloud Architecture'],
  },
  {
    name: 'Priya Patel',
    role: 'Head of Social Media',
    bio: 'Social media strategist who has helped brands reach millions. Data-driven content creator.',
    expertise: ['Social Strategy', 'Content', 'Analytics'],
  },
  {
    name: 'James Wilson',
    role: 'Senior POS Solutions Architect',
    bio: 'Specialist in designing and implementing enterprise POS systems for multi-location businesses.',
    expertise: ['POS Systems', 'Cloud', 'Integration'],
  },
  {
    name: 'Lisa Anderson',
    role: 'Project Manager',
    bio: 'Agile expert ensuring projects are delivered on time and exceed client expectations.',
    expertise: ['Agile', 'Scrum', 'Project Management'],
  },
  {
    name: 'Tom Zhang',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist focused on building reliable, scalable, and secure cloud systems.',
    expertise: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Sophie Martin',
    role: 'UX Researcher',
    bio: 'Data-driven designer who ensures every product decision is backed by user research.',
    expertise: ['User Research', 'Testing', 'Analytics'],
  },
  {
    name: 'Carlos Rivera',
    role: 'Mobile Developer',
    bio: 'iOS and Android expert building native and cross-platform mobile applications.',
    expertise: ['React Native', 'iOS', 'Android'],
  },
  {
    name: 'Emma Davis',
    role: 'Content Strategist',
    bio: 'Storyteller who crafts compelling narratives that resonate with audiences and drive engagement.',
    expertise: ['Content Strategy', 'Copywriting', 'SEO'],
  },
];

const departments = [
  { name: 'Engineering', count: 25, description: 'Building world-class software' },
  { name: 'Design', count: 10, description: 'Creating beautiful experiences' },
  { name: 'AI & Data', count: 8, description: 'Innovating with intelligence' },
  { name: 'Operations', count: 7, description: 'Ensuring excellence' },
];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <Scene3D />
        </Suspense>

        <div className="section-container relative z-10 text-center">
          <h1 className="heading-xl mb-6">
            Meet the Team<br />
            <span className="gradient-text">Behind the Magic</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a diverse group of innovators, designers, and developers united by a
            passion for creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Our Departments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="text-4xl font-bold mb-2">{dept.count}</div>
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Leadership & Key Team Members</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the talented individuals driving our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-2xl font-bold mb-1 text-center">{member.name}</h3>
                <p className="text-gray-400 mb-4 text-center">{member.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{member.bio}</p>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2 text-center">EXPERTISE</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Bonjour, we believe that great work comes from great culture. We foster an
              environment of innovation, collaboration, and continuous learning where every
              team member can thrive and make an impact.
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re committed to diversity, inclusion, and creating opportunities for growth.
              Our team members come from diverse backgrounds and bring unique perspectives that
              make us stronger and more creative.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our growing team.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              View Open Positions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
