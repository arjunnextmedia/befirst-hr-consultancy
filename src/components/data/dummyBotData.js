export const chatSteps = [
    {
      id: 'greeting',
      question: "👋 Hi there! Welcome to Befirst HR & Management Consultancy. Are you looking for HR, payroll, recruitment, or training services?",
      options: [
        { value: 'yes', label: 'Yes, I need HR services' },
        { value: 'no', label: 'Just browsing' }
      ],
      response: {
        yes: "Great choice! Let me guide you with the right solution. 🚀",
        no: "No problem! Feel free to explore. I'm here whenever you need HR assistance. 😊"
      }
    },
    {
      id: 'business_type',
      question: "Are you an entrepreneur, startup, SME, or an established company?",
      options: [
        { value: 'entrepreneur', label: '👤 Entrepreneur' },
        { value: 'startup', label: '🚀 Startup' },
        { value: 'sme', label: '🏢 SME' },
        { value: 'established', label: '🏛️ Established Company' }
      ],
      response: "Perfect! We provide customized HR & management solutions for businesses like yours in Kerala. 💼"
    },
    {
      id: 'service_needs',
      question: "Which service are you most interested in right now?",
      options: [
        { value: 'hr_consulting', label: '📋 HR Consulting' },
        { value: 'payroll', label: '💰 Payroll Setup & Training' },
        { value: 'recruitment', label: '🎯 Recruitment Services' },
        { value: 'training', label: '📚 Staff & Leadership Training' },
        { value: 'human_capital', label: '👥 Human Capital Development' },
        { value: 'management', label: '⚡ Management Consulting' }
      ],
      response: "Excellent! That's one of our specialties. We've helped 200+ companies excel in this area. ⭐"
    },
    {
      id: 'location',
      question: "Where is your business located?",
      options: [
        { value: 'kozhikode', label: '📍 Kozhikode' },
        { value: 'kochi', label: '📍 Kochi' },
        { value: 'other_kerala', label: '📍 Other Kerala City' },
        { value: 'outside_kerala', label: '📍 Outside Kerala' },
        { value: 'outside_india', label: '🌍 Outside India' }
      ],
      response: "Thanks! We specialize in supporting businesses across the globe with our proven HR methodologies. 🌐"
    },
    {
      id: 'team_size',
      question: "How many employees are currently in your company?",
      options: [
        { value: '1-10', label: '👥 1–10 employees' },
        { value: '11-50', label: '👥 11–50 employees' },
        { value: '51-200', label: '👥 51–200 employees' },
        { value: '200+', label: '👥 200+ employees' }
      ],
      response: "That helps us understand your HR and payroll needs better. We have specialized solutions for your team size. 📊"
    },
    {
      id: 'decision_maker',
      question: "Are you the business owner, manager, or HR decision-maker?",
      options: [
        { value: 'yes', label: '✅ Yes, I make HR decisions' },
        { value: 'no', label: '❌ No, I need to consult with others' }
      ],
      response: {
        yes: "Great! Speaking directly to decision-makers helps us give you the best advice. 💡",
        no: "No worries! I'll provide you with information to share with your decision-makers. 📋"
      }
    },
    {
      id: 'contact_info',
      question: "Can I have your name, email, and phone number so our HR experts can share a free consultation plan with you?",
      isForm: true,
      response: "Thank you! One of our consultants will reach out within 24 hours. 📞"
    },
    {
      id: 'call_to_action',
      question: "🎯 Before you go, would you like to book a **free 15-minute HR strategy session** with our team this week?",
      options: [
        { value: 'book_session', label: '📅 Yes, book my free session' },
        { value: 'send_details', label: '📧 Send me more details by email' }
      ],
      response: {
        book_session: "Awesome! We'll confirm your session shortly. 🚀",
        send_details: "Perfect! We'll send you detailed information within the next hour. 📨"
      }
    }
  ];
