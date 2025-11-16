'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, CheckCircle, Brain, Zap, BarChart, MessageSquare, Eye, Workflow } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const solutions = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data to solve complex business challenges and automate decision-making.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image and video analysis for quality control, object detection, and visual recognition.',
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict customer behavior, and make data-driven business decisions.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Intelligent automation of repetitive tasks to increase efficiency and reduce costs.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Intelligent virtual assistants that provide 24/7 customer support and engagement.',
  },
];

const useCases = [
  {
    title: 'Customer Service Automation',
    description: 'AI-powered chatbots that handle customer inquiries, reducing response times by 90%.',
    metric: '90% faster responses',
  },
  {
    title: 'Predictive Maintenance',
    description: 'Machine learning models that predict equipment failures before they occur.',
    metric: '40% cost reduction',
  },
  {
    title: 'Fraud Detection',
    description: 'Real-time AI analysis to identify and prevent fraudulent transactions.',
    metric: '99.5% accuracy',
  },
  {
    title: 'Personalization Engine',
    description: 'AI-driven product recommendations that increase conversion rates.',
    metric: '3x engagement',
  },
];

const technologies = [
  'TensorFlow',
  'PyTorch',
  'OpenAI GPT',
  'Scikit-learn',
  'Keras',
  'Hugging Face',
  'NLTK',
  'spaCy',
  'OpenCV',
  'Apache Spark',
  'MLflow',
  'Jupyter',
];

const benefits = [
  'Automate repetitive tasks and free up your team',
  'Make faster, data-driven decisions',
  'Reduce operational costs significantly',
  'Improve customer experience and satisfaction',
  'Gain competitive advantage with AI insights',
  'Scale operations without linear cost increase',
  'Predict trends and stay ahead of the market',
  'Enhance product quality and reliability',
];

export default function AISolutionsPage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[70vh] flex items-center">
        <div className="absolute inset-0 grid-background" />
        <Suspense fallback={<div />}>
          <ParticleField />
        </Suspense>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Cpu size={16} />
              <span className="text-sm font-medium">AI Solutions</span>
            </div>
            <h1 className="heading-xl mb-6">
              Intelligent Solutions<br />
              <span className="gradient-text">Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and machine learning
              solutions that automate processes, unlock insights, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore AI Solutions
                <ArrowRight size={20} />
              </Link>
              <Link href="#solutions" className="btn-secondary inline-flex items-center justify-center gap-2">
                See Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="inline-flex p-3 bg-black text-white rounded-lg mb-4">
                  <solution.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Real-World Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how AI transforms businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-bold">{useCase.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white text-black">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">AI Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the most advanced AI frameworks and tools.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-100 border-2 border-gray-200 rounded-full font-medium hover:bg-black hover:text-white hover:border-black transition-all"
              >
                {tech}
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
              <h2 className="heading-lg mb-6">Why Invest in AI?</h2>
              <p className="text-xl text-gray-400 mb-8">
                AI is no longer the future—it&apos;s the present. Stay competitive with intelligent automation.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your AI Journey
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="section-container">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="heading-lg mb-6">Ready to Harness AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI can transform your business and give you a competitive edge.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
