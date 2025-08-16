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