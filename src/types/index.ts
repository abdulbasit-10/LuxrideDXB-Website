export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'whatsapp';
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string;
  icon: 'phone' | 'email' | 'location';
}
