import type { ContactDetail, FooterLink, NavLink, SocialLink } from '@/types';

export const siteConfig = {
  name: 'LuxRideDXB',
  tagline: 'Arrive Like You Mean It',
  description:
    "Dubai's premier luxury chauffeur service — connecting discerning clients with world-class transport since 2017.",
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
  { label: 'Corporate Transport', href: '#services' },
  { label: 'VIP Events', href: '#services' },
  { label: 'Weddings', href: '#services' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export const socialLinks: SocialLink[] = [
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
  { label: 'WhatsApp', href: 'https://wa.me/97140000000', icon: 'whatsapp' },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Phone',
    value: '+971 4 000 0000',
    href: 'tel:+97140000000',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'concierge@luxridedxb.com',
    href: 'mailto:concierge@luxridedxb.com',
    icon: 'email',
  },
  {
    label: 'Location',
    value: 'Downtown Dubai, UAE',
    href: 'https://maps.google.com/?q=Downtown+Dubai,+UAE',
    icon: 'location',
  },
];
