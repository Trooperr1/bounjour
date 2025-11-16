import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'POS Systems', href: '/services/pos-systems' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Social Media', href: '/services/social-media' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bonjour</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              A creative digital agency specializing in web development, AI solutions,
              and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white border border-gray-200 hover:border-gray-900 rounded-lg transition-colors"
                >
                  <social.icon size={18} className="text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Bonjour Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Terms
            </Link>
            <a href="mailto:hello@bonjour.agency" className="text-gray-600 hover:text-gray-900 text-sm transition-colors inline-flex items-center gap-2">
              <Mail size={14} />
              hello@bonjour.agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
