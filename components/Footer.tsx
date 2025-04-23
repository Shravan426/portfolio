'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Shravan426',
    label: 'GitHub',
    icon: <Github size={20} />,
  },
  {
    href: 'https://linkedin.com/in/shravan-suresh-3b0811233/',
    label: 'LinkedIn',
    icon: <Linkedin size={20} />,
  },
  {
    href: 'mailto:shravansuresh558@gmail.com',
    label: 'Email',
    icon: <Mail size={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mb-2">Contact: shravansuresh558@gmail.com</p>
        <p>© {new Date().getFullYear()} Shravan Suresh. All rights reserved.</p>
      </div>
    </footer>
  );
}