// Search data for services with keywords and routes
export const searchData = [
  {
    id: 1,
    title: "HR Consulting Services",
    route: "/service-single/1",
    description: "Comprehensive HR system design, policy frameworks, recruitment support, organizational structuring, and performance management systems",
    keywords: [
      "hr consultancy",
      "hr services",
      "hr audit",
      "policy manual",
      "organizational structuring",
      "job descriptions",
      "appraisal systems",
      "onboarding",
      "exit protocols",
      "recruitment support",
      "performance management",
      "hr policy",
      "human resources",
      "hr framework",
      "compliance"
    ]
  },
  {
    id: 2,
    title: "Management Consultancy",
    route: "/service-single/2",
    description: "Business process reengineering, crisis management, and efficient business structures for sustainable growth",
    keywords: [
      "management consultancy",
      "business process optimization",
      "startup support",
      "organizational planning",
      "interim hr leadership",
      "strategy",
      "crisis management",
      "process reengineering",
      "business structure",
      "sustainable growth",
      "operational support",
      "management consulting",
      "business advisory",
      "process improvement"
    ]
  },
  {
    id: 3,
    title: "Human Capital Development",
    route: "/service-single/3",
    description: "Employee orientation, engagement strategies, retention planning, and culture building programs",
    keywords: [
      "human capital development",
      "employee orientation",
      "employee engagement",
      "retention strategy",
      "talent retention",
      "orientation frameworks",
      "engagement surveys",
      "hr alignment",
      "business goals",
      "culture building",
      "workforce development",
      "employee development",
      "talent management",
      "staff development"
    ]
  },
  {
    id: 4,
    title: "Staff & Leadership Training",
    route: "/service-single/4",
    description: "Training programs for soft skills, workplace efficiency, and leadership development in English and Malayalam",
    keywords: [
      "staff training",
      "leadership training",
      "soft skills",
      "workplace efficiency",
      "communication",
      "teamwork",
      "emotional intelligence",
      "sales training",
      "admin efficiency",
      "functional skills",
      "hr training",
      "operations training",
      "leadership development",
      "skill building",
      "malayalam training",
      "english training"
    ]
  },
  {
    id: 5,
    title: "Payroll Setup & Training",
    route: "/service-single/5",
    description: "Payroll system implementation, compliance setup, and hands-on training for internal management",
    keywords: [
      "payroll setup",
      "payroll training",
      "zoho payroll",
      "tally payroll",
      "payroll compliance",
      "leave management",
      "attendance systems",
      "payroll software",
      "hr admin training",
      "payroll management",
      "compliance setup",
      "attendance tracking",
      "leave tracking",
      "payroll system"
    ]
  },
  {
    id: 6,
    title: "Add-on Services",
    route: "/service-single/6",
    description: "Custom HR workshops, HRMS software implementation, engagement frameworks, and annual HR retainers",
    keywords: [
      "add-on services",
      "custom hr workshops",
      "hrms software",
      "software implementation",
      "employee engagement frameworks",
      "annual hr retainers",
      "startup retainers",
      "sme retainers",
      "hr workshop",
      "industry specific",
      "software resale",
      "engagement framework",
      "retainer services",
      "custom services"
    ]
  },
  {
    id: 101,
    title: "How SMEs Can Build a Strong Employer Brand in Kerala",
    route: "/blog/employer-branding-kerala",
    description: "Learn how SMEs in Kerala can create strong employer branding strategies to attract and retain top talent without a big budget.",
    keywords: [
      "employer branding", "kerala employer brand", "sme hr strategy",
      "employee retention", "talent attraction", "hr consultancy kerala",
      "branding for hr", "workplace culture", "career development",
      "online employer branding", "employee value proposition",
      "hr best practices kerala"
    ]
  },
  {
    id: 102,
    title: "Why Outsourcing Recruitment Can Save You Time & Money – Benefits of Recruitment Outsourcing in Kerala",
    route: "/blog/recruitment-outsourcing-kerala",
    description: "Discover the benefits of outsourcing recruitment for SMEs in Kerala and how it reduces costs, speeds up hiring, and ensures better quality hires.",
    keywords: [
      "recruitment outsourcing kerala", "outsourced hiring benefits",
      "kerala recruitment agency", "cost-effective hiring",
      "reduce hiring cost", "fast recruitment", "hr consultancy calicut",
      "outsourcing hr", "talent acquisition kerala", "scalable hiring solutions"
    ]
  },
  {
    id: 103,
    title: "Top 10 Payroll Mistakes SMEs in Kerala Must Avoid",
    route: "/blog/payroll-mistakes-kerala",
    description: "Common payroll mistakes SMEs in Kerala make and practical tips to avoid compliance issues and financial risks.",
    keywords: [
      "payroll mistakes kerala", "kerala sme payroll tips",
      "compliance payroll errors", "epf esi kerala", "salary calculation mistakes",
      "payroll compliance", "avoid payroll penalties", "payroll outsourcing kerala"
    ]
  },
  {
    id: 104,
    title: "The Complete Guide to HR Compliance in Kerala",
    route: "/blog/hr-compliance-kerala",
    description: "A comprehensive guide for SMEs in Kerala to ensure HR compliance, avoid legal risks, and maintain smooth business operations.",
    keywords: [
      "hr compliance kerala", "kerala labour law guide",
      "statutory compliance hr", "sme hr compliance tips",
      "labour laws kerala", "employee benefits kerala",
      "pf esi compliance", "hr audit kerala", "legal hr support kerala"
    ]
  },
  {
    id: 105,
    title: "How to Choose the Right HR Consultancy in Calicut",
    route: "/blog/hr-consultancy-calicut",
    description: "Learn how to select the best HR consultancy in Calicut for your business to improve hiring, compliance, and employee engagement.",
    keywords: [
      "hr consultancy calicut", "choose hr consultant kerala",
      "best hr consultancy", "sme hr services calicut",
      "hr partner selection", "hr outsourcing kerala",
      "recruitment consultancy calicut", "hr consultancy tips",
      "kerala hr experts"
    ]
  }
];


// Function to search through the data
export const searchServices = (query) => {
  if (!query || query.trim() === '') {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  
  return searchData.filter(service => {
    // Search in title
    const titleMatch = service.title.toLowerCase().includes(searchTerm);
    
    // Search in description
    const descriptionMatch = service.description.toLowerCase().includes(searchTerm);
    
    // Search in keywords
    const keywordMatch = service.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm)
    );
    
    return titleMatch || descriptionMatch || keywordMatch;
  });
};

// Function to get search suggestions (limited results for dropdown)
export const getSearchSuggestions = (query, limit = 5) => {
  const results = searchServices(query);
  return results.slice(0, limit);
};