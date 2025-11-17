import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'Team', href: '/team' },
  ],
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'POS Systems', href: '/services/pos-systems' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Social Media', href: '/services/social-media' },
  ],
  resources: [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-white">BONJOUR</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Premium digital solutions that transform businesses. We create exceptional
              digital experiences that drive growth and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Company & Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bonjour Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:hello@bonjour.agency" className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
              <Mail size={14} />
              hello@bonjour.agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
