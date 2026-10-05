import { PortfolioData } from './types';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Ikhtiyorjon Nabiyev",
    uzbekFullName: "Nabiyev Ixtiyorjon Muzaffar o'g'li",
    tagline: "Economics & Data Analytics Specialist | ACCA Candidate | Fintech Developer",
    bio: "Undergraduate student at New Uzbekistan University specializing in Economics and Data Analytics, and active ACCA Candidate with successful completions in Financial Reporting (FR) and Financial Accounting (FA). Passionate about combining international accounting standards (IFRS), quantitative economic modeling, and modern full-stack web applications to solve complex business and financial challenges.",
    location: "Tashkent, Uzbekistan (Origin: Rishton, Fergana)",
    email: "ikhtiyorjonnabiyev@gmail.com",
    phone: "+998 (90) 000-00-00",
    telegram: "https://t.me/ixtiyorjonnabiyev",
    github: "https://github.com/ixtiyorjonnabiyev",
    linkedin: "https://www.linkedin.com/in/ikhtiyorjon-nabiyev",
    avatar: "/avatar.jpg",
    status: "Open to Financial Analyst, Data Analytics & Fintech Opportunities",
    birthDate: "09.10.2006",
    nationality: "O'zbekiston (Uzbekistan)"
  },
  education: {
    university: "Yangi O'zbekiston universiteti (New Uzbekistan University)",
    degree: "Bakalavr (Bachelor of Science)",
    major: "Iqtisodiyot va ma'lumotlar tahlili (Economics and Data Analytics)",
    faculty: "Gumanitar, aniq va ijtimoiy fanlar maktabi (School of Humanities, Exact and Social Sciences)",
    year: "3-kurs (3rd Year Student)",
    period: "2023 - 2027 (Expected)",
    studyMode: "Kunduzgi (Full-time) - Group FED1",
    studentIdNumber: "514241100433",
    documentUrl: "/student_id.jpg",
    description: "Rigorous academic curriculum covering advanced micro & macroeconomics, econometrics, statistical modeling, data analytics, financial mathematics, and algorithmic problem solving at one of Uzbekistan's premier higher education institutions."
  },
  acca: {
    registrationNumber: "6827910",
    registrationDate: "10 February 2026",
    qualification: "ACCA Qualification (September 2018 Syllabus)",
    transcriptUrl: "/acca_transcript.pdf",
    exams: [
      {
        code: "BT",
        name: "Business and Technology",
        status: "exempted",
        session: "March 2026",
        date: "March 2026"
      },
      {
        code: "FA",
        name: "Financial Accounting",
        status: "passed",
        mark: 65,
        session: "March 2026 (CBE Pass)",
        date: "March 2026"
      },
      {
        code: "FR",
        name: "Financial Reporting",
        status: "passed",
        mark: 64,
        session: "June 2026",
        date: "June 2026"
      },
      {
        code: "MA",
        name: "Management Accounting",
        status: "in-progress",
        session: "Next Session"
      },
      {
        code: "LW",
        name: "Corporate and Business Law",
        status: "in-progress",
        session: "Upcoming"
      },
      {
        code: "PM",
        name: "Performance Management",
        status: "planned",
        session: "Upcoming"
      },
      {
        code: "TX",
        name: "Taxation",
        status: "planned",
        session: "Upcoming"
      },
      {
        code: "AA",
        name: "Audit and Assurance",
        status: "planned",
        session: "Upcoming"
      },
      {
        code: "FM",
        name: "Financial Management",
        status: "planned",
        session: "Upcoming"
      },
      {
        code: "SBL",
        name: "Strategic Business Leader",
        status: "planned",
        session: "Strategic Level"
      },
      {
        code: "SBR",
        name: "Strategic Business Reporting",
        status: "planned",
        session: "Strategic Level"
      },
      {
        code: "AFM",
        name: "Advanced Financial Management",
        status: "planned",
        session: "Optional (1 of 2)"
      },
      {
        code: "APM",
        name: "Advanced Performance Management",
        status: "planned",
        session: "Optional (2 of 2)"
      }
    ]
  },
  skills: [
    {
      title: "Finance & Accounting (IFRS)",
      skills: [
        { name: "Financial Reporting (IFRS / IAS)", level: 90, note: "ACCA FR Certified (64%)" },
        { name: "Financial Accounting & CBE", level: 92, note: "ACCA FA Certified (65%)" },
        { name: "Consolidation & Group Accounts", level: 85, note: "IFRS 10, IAS 28" },
        { name: "Cash Flow & Ratio Analysis", level: 90, note: "Liquidity, Solvency & Profitability" },
        { name: "Management Accounting & Costing", level: 80, note: "Variance & Cost Volume Profit" }
      ]
    },
    {
      title: "Economics & Data Analytics",
      skills: [
        { name: "Econometric Modeling", level: 88, note: "Regression & Time Series" },
        { name: "Advanced Microsoft Excel / Sheets", level: 95, note: "Financial Models, VBA, Pivots" },
        { name: "Python for Data Analysis", level: 85, note: "Pandas, NumPy, Matplotlib" },
        { name: "Statistical Hypothesis Testing", level: 86, note: "Probability & Inference" },
        { name: "Business Intelligence & Power BI", level: 82, note: "Interactive Dashboards" }
      ]
    },
    {
      title: "Software & Web Development",
      skills: [
        { name: "Next.js & React 19", level: 88, note: "App Router, Server Components" },
        { name: "TypeScript & JavaScript", level: 85, note: "Type-safe robust web apps" },
        { name: "Tailwind CSS & Modern UI", level: 90, note: "Responsive & Glassmorphic UI" },
        { name: "REST APIs & Data Storage", level: 80, note: "JSON, State & Persistence" },
        { name: "Git & GitHub Workflow", level: 88, note: "Version control & CI/CD" }
      ]
    },
    {
      title: "Languages & Communication",
      skills: [
        { name: "Uzbek (O'zbek tili)", level: 100, note: "Native Language" },
        { name: "English", level: 85, note: "Professional & Academic Working Proficiency" },
        { name: "Russian", level: 80, note: "Professional Working Proficiency" }
      ]
    }
  ],
  projects: [
    {
      id: "moliya-app",
      title: "Moliya - Enterprise Financial & Business Accounting Platform",
      category: "Fintech & ERP",
      summary: "Full-scale enterprise business management system tailored for retail, manufacturing, logistics, restaurants, and corporate entities in Uzbekistan.",
      description: "Architected a comprehensive financial operations software supporting multi-currency tracking (UZS / USD), automated P&L statements, balance sheets, cash flow forecasting, multi-industry business categorization, inventory management, tax estimations, and multi-language localization (Uzbek, Russian, English). Built with Next.js 16, React 19, and Tailwind CSS.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Financial Modeling", "IFRS"],
      githubUrl: "https://github.com/ixtiyorjonnabiyev/financeV_1",
      liveUrl: "https://finance-v-1.vercel.app",
      featured: true
    },
    {
      id: "financial-reporting-dashboard",
      title: "Automated IFRS Financial Statements & Ratio Analyzer",
      category: "Financial Analytics",
      summary: "Dynamic dashboard that automatically parses financial records and computes liquidity, solvency, efficiency, and DuPont profitability metrics.",
      description: "Interactive application for corporate finance teams to perform real-time ratio analysis (Current Ratio, Quick Ratio, Debt-to-Equity, ROE DuPont decomposition, Working Capital cycles). Generates comparative visual charts and warns about financial distress indicators based on ACCA FR standards.",
      technologies: ["Data Analytics", "Financial Ratios", "TypeScript", "Next.js", "Chart Visualization"],
      githubUrl: "https://github.com/ixtiyorjonnabiyev",
      liveUrl: "",
      featured: true
    },
    {
      id: "uzbekistan-economic-insights",
      title: "Macroeconomic & Market Data Visualizer",
      category: "Data Science & Economics",
      summary: "Quantitative data platform tracking key Uzbekistan macroeconomic indicators: GDP trends, inflation, exchange rates, and sector performance.",
      description: "Built at New Uzbekistan University as part of research in applied econometrics. Analyzes central bank interest rate changes, trade balance dynamics, and price inflation using historical time-series datasets.",
      technologies: ["Python", "Econometrics", "Pandas", "Statistical Modeling", "Interactive Web"],
      githubUrl: "https://github.com/ixtiyorjonnabiyev",
      liveUrl: "",
      featured: false
    }
  ],
  certifications: [
    {
      id: "acca-fr",
      title: "ACCA Financial Reporting (FR)",
      issuer: "Association of Chartered Certified Accountants (UK)",
      date: "June 2026",
      credentialId: "ACCA Reg: 6827910 | Pass (64%)",
      verifyUrl: "https://www.accaglobal.com",
      fileUrl: "/acca_transcript.pdf"
    },
    {
      id: "acca-fa",
      title: "ACCA Financial Accounting (FA)",
      issuer: "Association of Chartered Certified Accountants (UK)",
      date: "March 2026",
      credentialId: "ACCA Reg: 6827910 | CBE Pass (65%)",
      verifyUrl: "https://www.accaglobal.com",
      fileUrl: "/acca_transcript.pdf"
    },
    {
      id: "acca-bt",
      title: "ACCA Business and Technology (BT)",
      issuer: "Association of Chartered Certified Accountants (UK)",
      date: "March 2026",
      credentialId: "ACCA Reg: 6827910 | Exemption",
      verifyUrl: "https://www.accaglobal.com",
      fileUrl: "/acca_transcript.pdf"
    },
    {
      id: "new-uz-uni",
      title: "Official Student Identity & Academic Enrollment",
      issuer: "Yangi O'zbekiston universiteti (New Uzbekistan University)",
      date: "2023 - Present",
      credentialId: "Guvohnoma: 514241100433 | JShShIR: 50910066960026",
      fileUrl: "/student_id.jpg"
    }
  ],
  adminPin: "1234"
};
