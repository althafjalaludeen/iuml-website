export type NavItem = {
  href: string;
  label: string;
};

export type SocialPlaceholder = {
  platform: string;
  note: string;
};

export const site = {
  name: "Indian Union Muslim League",
  shortName: "IUML",
  /**
   * Neutral placeholders only. Replace when verified copy is supplied.
   */
  tagline: "[Official tagline will be added here.]",
  description:
    "[An official institutional record of organisation, leadership, and public service.]",
  metadata: {
    title: "Indian Union Muslim League",
    description:
      "Official institutional portal of the Indian Union Muslim League. Provides organizational records, history, committee structures, activities, and public communications.",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/organization", label: "Organization" },
    { href: "/history", label: "History" },
    { href: "/activities", label: "Activities" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ] as const satisfies readonly NavItem[],
  contact: {
    email: "[Official email will be added here.]",
    phone: "[Official telephone will be added here.]",
    address: "[Official headquarters address will be added here.]",
  },
  social: [
    {
      platform: "Social Media",
      note: "[Official social channels will be listed here.]",
    },
  ] as const satisfies readonly SocialPlaceholder[],
  legal: {
    privacyHref: "/privacy",
    termsHref: "/terms",
    copyrightNote: "All official rights reserved. Content subject to verified records.",
  },
} as const;

export const homeSections = {
  heroEyebrow: "Indian Union Muslim League",
  heroTitle: "An institutional record of organisation, people, and public service.",
  heroSubtitle:
    "[Official institutional overview will be added here once verified text is supplied.]",
  about: {
    id: "about",
    eyebrow: "01 / Organisation",
    title: "About the Organisation",
    description:
      "[Official introduction to the Indian Union Muslim League will be added here once verified copy is supplied.]",
    href: "/about",
    action: "Read Full Overview",
  },
  vision: {
    id: "vision",
    eyebrow: "02 / Principles",
    title: "Vision and Core Values",
    description:
      "[Verified institutional vision, constitutional values, and principles will be added here.]",
    href: "/about",
    action: "Explore Values",
  },
  history: {
    id: "history",
    eyebrow: "03 / History",
    title: "A History of the Indian Union Muslim League",
    description:
      "Explore the organization's journey from its formation in 1948 through its subsequent political, constitutional, and parliamentary development.",
    href: "/history",
    action: "Explore Our History",
  },
  organization: {
    id: "organization",
    eyebrow: "04 / Leadership",
    title: "Organization & Leadership",
    description:
      "A structured view of the leadership, committees, and organizational wings represented across the local organization.",
    href: "/organization",
    action: "Explore Our Organization",
  },
  committee: {
    id: "organization",
    eyebrow: "04 / Leadership",
    title: "Organization & Leadership",
    description:
      "A structured view of the leadership, committees, and organizational wings represented across the local organization.",
    href: "/organization",
    action: "Explore Our Organization",
  },
  activities: {
    id: "activities",
    eyebrow: "05 / Initiatives",
    title: "Programs & Initiatives",
    description:
      "A record of programs, initiatives and community activities documented by the organization.",
    href: "/activities",
    action: "View All Activities",
  },
  events: {
    id: "events",
    eyebrow: "06 / Proceedings",
    title: "Events & Programs",
    description:
      "A public record of upcoming and past programs, meetings and events documented by the organization.",
    href: "/events",
    action: "View All Events",
  },
  media: {
    id: "media",
    eyebrow: "07 / Archive",
    title: "Media and Photographic Archive",
    description:
      "[Official press releases, photographic archives, and authorized statements will be accessible here.]",
    href: "/media",
    action: "View Media Archive",
  },
  contact: {
    id: "contact",
    eyebrow: "08 / Communications",
    title: "Official Communications",
    description:
      "[Official headquarters contact details and formal communication channels will be provided here.]",
    href: "/contact",
    action: "Contact Office",
  },
} as const;
