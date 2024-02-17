import { facebook, instagram, linkedin, twitter, send, shield, star,  } from "../assets";
// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

interface navigationLinks {
  id: string;
  title: string;
}

export const navLinks: navigationLinks[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "company-overview",
    title: "Company Overview",
  },
  {
    id: "services",
    title: "Our Services",
  },
  {
    id: "approach",
    title: "Our Approach",
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

interface featureData {
  id: string;
  icon: string;
  title: string;
  content: string; 
}

export const features: featureData[] = [
  {
    id: "feature-1",
    icon: star,
    title: "Expertise",
    content:
      "Our team comprises experienced professionals who are passionate about IT and committed to helping businesses succeed.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Customization",
    content:
      "We tailor our services to your unique needs, providing solutions that fit your business like a glove.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Reliability",
    content:
      "You can count on us for timely deliveries, exceptional support, and consistent quality.",
  },
  {
    id: "feature-4",
    icon: shield,
    title: "Long-Term Partnerships",
    content:
      "We aim to build lasting relationships with our clients, evolving alongside your business to provide ongoing IT support.",
  },
];

// interface feedbackData {
//   id: string;
//   content: string;
//   name: string;
//   title: string;
//   img: string
// }

// export const feedback: feedbackData[] = [
//   {
//     id: "feedback-1",
//     content:
//       "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
//     name: "Herman Jensen",
//     title: "Founder & Leader",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content:
//       "Money makes your life easier. If you're lucky to have it, you're lucky.",
//     name: "Steve Mark",
//     title: "Founder & Leader",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content:
//       "It is usually people in the money business, finance, and international trade that are really rich.",
//     name: "Kenn Gallagher",
//     title: "Founder & Leader",
//     img: people03,
//   },
// ];

interface statsData {
  id: string;
  title: string;
  value: string;
}

export const stats: statsData[] = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

interface approachData {
  title: string,
  icon: string;
  description: string
}

export const ourApproachData: approachData[] = [
  {
    title: 'Client-Centric Service',
    icon: '',
    description: 
      'Your satisfaction is our priority, and we work closely with you to ensure our services align with your goals.'
  },
  {
    title: 'Quality Assurance',
    icon: '',
    description: 
      'We adhere to strict quality control standards to provide reliable and top-notch IT solutions.'
  },
  {
    title: 'Innovation',
    icon: '',
    description: 
      'We stay at the forefront of technology trends and adapt to the ever-evolving IT landscape to offer cutting-edge solutions.'
  },
  {
    title: 'Cost-Effectiveness',
    icon: '',
    description: 
      'We understand the importance of budget-conscious decision-making and offer competitive pricing without compromising quality.'
  },
]

interface footerLinkData {
  title: string,
  links: linkData[],
}

interface linkData {
  name: string;
  link: string
}

export const footerLinks: footerLinkData[] = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

interface socialMediaData {
  id: string;
  icon: string;
  link: string
}

export const socialMedia: socialMediaData[] = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

// interface clientData {
//   id: string;
//   logo: string
// }

// export const clients: clientData[] = [
//   {
//     id: "client-1",
//     logo: airbnb,
//   },
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
//   },
// ];

interface contactData {
  title: string,
  content: string
}

export const contacts: contactData[] = [
  {
    title: 'Address',
    content: '19 Avis Street, Bagong Ilog, Pasig City'
  },
  {
    title: 'Phone',
    content: '(+63) 09560734220'
  },
  {
    title: 'Email',
    content: 'chaseitsolutionsph@gmail.com'
  },
]