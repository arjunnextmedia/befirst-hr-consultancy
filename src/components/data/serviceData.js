
export const hrConsultancyService = {
  id: 1,
  title: "HR Consultancy Services in Kerala",
  slug: "hr-consultancy-services",
  category: "HR Consulting",
  featured: true,
  images: [
    "/assets/images/services/hr-consultancy-main.jpg",
    "/assets/images/services/hr-consultancy-secondary.jpg"
  ],
  overview: {
    title: "HR Consultancy Services in Kerala – Structured Growth for Businesses",
    description: "At Befirst HR & Management Consultancy, we specialize in creating robust HR frameworks that empower businesses to operate smoothly, attract top talent, and maintain compliance with legal and organizational standards. Whether you are a startup finding your footing, an SME scaling up, or a corporate aiming for efficiency, our HR solutions are tailored to your growth stage and long-term vision.",
    subDescription: "We understand the unique HR challenges faced by Kerala-based entrepreneurs, companies, and leaders, and we design systems that balance performance, compliance, and employee satisfaction."
  },
  specializations: {
    title: "Our HR Specializations",
    points: [
      {
        title: "HR Audits & Policy Manuals",
        description: "Ensure your HR operations meet compliance standards and reflect your company culture.",
        icon: "audit",
        details: [
          "Comprehensive HR policy review and development",
          "Compliance assessment with Kerala labor laws",
          "Employee handbook creation and updates",
          "Process documentation and standardization"
        ]
      },
      {
        title: "Organizational Structuring",
        description: "Build a clear hierarchy and workflow for efficient decision-making.",
        icon: "structure",
        details: [
          "Organizational chart design",
          "Reporting structure optimization",
          "Role and responsibility mapping",
          "Department alignment strategies"
        ]
      },
      {
        title: "Job Descriptions & Appraisal Systems",
        description: "Define roles, set measurable KPIs, and implement performance evaluation processes.",
        icon: "performance",
        details: [
          "Custom job description development",
          "KPI framework design",
          "Performance appraisal system setup",
          "360-degree feedback implementation"
        ]
      },
      {
        title: "Onboarding & Exit Protocols",
        description: "Smooth processes for welcoming talent and managing transitions professionally.",
        icon: "process",
        details: [
          "New employee onboarding programs",
          "Exit interview protocols",
          "Knowledge transfer processes",
          "Professional transition management"
        ]
      }
    ]
  },
  whyChooseUs: {
    title: "Why Choose Befirst for HR Consultancy?",
    subtitle: "Partnering with us ensures you gain not just HR support, but a strategic edge in driving business growth.",
    reasons: [
      {
        title: "Kerala Market Expertise",
        description: "We understand the local business landscape and workforce dynamics specific to Kerala's unique market conditions.",
        icon: "MapPin"
      },
      {
        title: "Custom Solutions",
        description: "No generic templates; we design HR systems that align perfectly with your business goals and company culture.",
        icon: "Settings"
      },
      {
        title: "Compliance & Legal Awareness",
        description: "Stay compliant with labor laws while building a healthy work environment that protects both employer and employees.",
        icon: "ShieldCheck"
      },
      {
        title: "Growth-Driven Approach",
        description: "HR as a strategic partner in scaling your business, not just administrative support.",
        icon: "TrendingUp"
      }
    ]
  },
  benefits: {
    title: "Key Benefits of Our HR Consultancy",
    items: [
      {
        title: "Improved Compliance",
        description: "Ensure your business meets all regulatory requirements and avoids legal complications."
      },
      {
        title: "Enhanced Productivity",
        description: "Streamlined processes and clear role definitions boost overall organizational efficiency."
      },
      {
        title: "Better Talent Retention",
        description: "Professional HR systems create a positive work environment that retains top talent."
      },
      {
        title: "Scalable Systems",
        description: "HR frameworks designed to grow with your business, from startup to enterprise."
      }
    ]
  },
  faqs: [
    {
      question: "Why should my Kerala-based business invest in HR consultancy?",
      answer: "HR consultancy ensures your business has structured policies, legal compliance, and effective talent management systems – essential for growth, productivity, and avoiding costly legal issues."
    },
    {
      question: "Do you offer HR consultancy for startups in Kerala?",
      answer: "Yes! We specialize in creating scalable HR frameworks for startups, ensuring they are ready for rapid growth while maintaining compliance and efficiency."
    },
    {
      question: "How long does it take to set up a complete HR system?",
      answer: "Depending on your organization's size, it can take 2–6 weeks to design, implement, and train your team on the new HR system."
    },
    {
      question: "Can you help with performance appraisal systems?",
      answer: "Absolutely. We create customized job descriptions, KPIs, and appraisal systems to measure and improve employee performance effectively."
    },
    {
      question: "Do you provide ongoing HR support after setup?",
      answer: "Yes, we offer both one-time setup services and ongoing HR management support packages to ensure your systems evolve with your business needs."
    }
  ],
  process: {
    title: "Our HR Consultancy Process",
    steps: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "Comprehensive evaluation of your current HR practices and organizational needs."
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Custom HR strategy design based on your business goals and growth projections."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Systematic rollout of HR systems with proper documentation and training."
      },
      {
        step: 4,
        title: "Training & Support",
        description: "Team training and ongoing support to ensure successful adoption and optimization."
      }
    ]
  },
  seo: {
    title: "HR Consultancy Services in Kerala | Befirst HR & Management Consultancy",
    description: "Expert HR consultancy in Kerala for startups, SMEs & corporates. HR audits, policy manuals, structuring, appraisals, onboarding & compliance. Boost growth & efficiency today!",
    keywords: "HR consultancy Kerala, HR services Kerala, HR audits Kerala, policy manuals Kerala, HR outsourcing Kerala, HR structuring Kerala, performance management Kerala, HR consulting for startups Kerala, HR solutions Kerala, corporate HR consulting Kerala, C-suite HR support Kerala, SME HR consultancy Kerala"
  }
};

// You can add more services here following the same structure
export const allServices = [
  hrConsultancyService,
  // Add other services like Management Consultancy, Human Capital Development, etc.
];

export const getServiceById = (id) => {
  return allServices.find(service => service.id === parseInt(id));
};

export const getServiceBySlug = (slug) => {
  return allServices.find(service => service.slug === slug);
};