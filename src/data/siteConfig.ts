import type { ContactDetail, FooterLink, NavLink, SocialLink } from '@/types';

export const siteConfig = {
  name: 'LuxRideDXB',
  tagline: 'Arrive Like You Mean It',
  description:
    "Dubai's premier luxury chauffeur service connecting discerning clients with world class transport since 2017.",
  foundedYear: 2017,
};

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export const footerServiceLinks: FooterLink[] = [
  { label: 'Airport Transfers', href: '#services' },
  { label: 'VIP Events', href: '#services' },
  { label: 'Corporate Transport', href: '#services' },
  { label: 'Parties and Events', href: '#services' },
  { label: 'Hourly Chauffeur', href: '#services' },
  { label: 'Half-Day Chauffeur', href: '#services' },
  { label: 'Full-Day Chauffeur', href: '#services' },
  { label: 'City to City', href: '#services' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/luxridedxb?igsh=M2wzODFjbWVxZXEw',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1E2ChbeYaK/',
    icon: 'facebook',
  },
  { label: 'WhatsApp', href: 'https://wa.me/971523695478', icon: 'whatsapp' },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Phone',
    value: '+971 52 369 5478',
    href: 'tel:+971523695478',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'luxridedxb@gmail.com',
    href: 'mailto:luxridedxb@gmail.com',
    icon: 'email',
  },
  {
    label: 'Location',
    value: 'Downtown Dubai, UAE',
    href: 'https://maps.google.com/?q=Downtown+Dubai,+UAE',
    icon: 'location',
  },
];
