export interface PortfolioLink {
  label: string;
  href: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  lazy?: boolean;
  summary?: string;
  role?: string;
  bullets?: string[];
  link?: PortfolioLink;
}

export interface SocialLink {
  platform: 'facebook' | 'github' | 'linkedin';
  label: string;
  href: string;
  hoverClass: string;
}

export const PROFILE = {
  name: 'Setthawut Jitsom',
  displayName: 'Setthawut Jitsom (Pun)',
  avatar: '/images/pun-square.webp',
  avatarAlt: 'Portrait of Setthawut Jitsom',
  degree: 'Computer Engineering and Digital Technology Student',
  faculty: 'Faculty of Engineering, Chulalongkorn University',
};

export const CONTACT = {
  telDisplay: '(+66) 81 161 9182',
  telHref: 'tel:+66811619182',
  email: 'nu9g37@gmail.com',
  lineId: 'pun310849',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/Nu9g37.Pun/',
    hoverClass: 'hover:text-[#1877F2]',
  },
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/nu9g37',
    hoverClass: 'hover:text-gray-950',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/setthawut-jitsom-4603b4392/',
    hoverClass: 'hover:text-[#0A66C2]',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'interview-shepherd',
    title: 'Interview Shepherd',
    image: '/images/interview-shepherd.webp',
    imageAlt: 'Interview Shepherd web application login interface',
    summary:
      'Interview Shepherd is a web application that helps users practice job interviews with an AI-powered interviewer. The platform simulates realistic interview scenarios, provides instant feedback, and supports multiple job roles and languages through customizable job posts to be used for interviews.',
    role: 'Designed and developed a responsive frontend interface for an AI-powered interview platform using HTML and Tailwind CSS.',
    link: {
      label: 'GitHub',
      href: 'https://github.com/14two-77/interview-shepherd',
    },
  },
  {
    id: 'posn-camp-2',
    title: 'POSN Camp 2',
    image: '/images/posn-2.webp',
    imageAlt: 'POSN Computer Olympiad Camp 2 certificate at Burapha University',
    lazy: true,
    bullets: [
      'Selected candidate for the highly competitive Computer Olympiad Camp 2 at Burapha University.',
      'Mastered advanced algorithms and data structures (C++).',
    ],
  },
  {
    id: 'art-and-craft',
    title: 'Gold Medal, Computer Programming Competition',
    image: '/images/art-and-craft.webp',
    imageAlt: 'Gold Medal certificate from the 71st Student Arts and Crafts Computer Programming Competition',
    lazy: true,
    summary: 'Achieved Gold Medal (Runner-up) in the 71st Student Arts and Crafts Competition.',
  },
  {
    id: 'sci-sym',
    title: 'Silver Medal, Science Symposium 4th',
    image: '/images/sci-sym.webp',
    imageAlt: 'Silver Medal certificate from the 4th PCSHS Science Symposium in Applied Mathematics',
    lazy: true,
    summary: 'The 4th PCSHS Science Symposium (Applied Mathematics).',
    link: {
      label: 'View File',
      href: 'https://drive.google.com/file/d/1xv9g6sJ2pKQ3vmeTZ_GStVSkrHhOGc-7/view?usp=sharing',
    },
  },
];
