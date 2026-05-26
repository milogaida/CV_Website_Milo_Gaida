export const personal = {
  name: "Milo Gaida",
  email: "milojgaida@gmail.com",
  phone: "+49 174 317 9493",
  location: "Berlin, Germany",
  github: "github.com/milogaida",
  tagline: "Business & Data Analytics Graduate · Constantly Moving Forward",
  bio: [
    "I'm a business and data analytics graduate, naturally competitive, drawn to complex problems, and at my best when the stakes are high. My background spans multi-party investment structures in African mineral development (including budgeting, accounting, and financial reporting across multiple parallel projects), institutional stakeholder management across four continents, and self-directed technical education in LLMs and AI agents.",
    "I'm about to begin a second bachelor's degree in Economics at FU Berlin, focused on quantitative methods, econometrics, and time series analysis. I'm looking for intern or Werkstudent roles where being analytically sharp and comfortable with ambiguity matters more than years of experience.",
  ],
};

// About page snapshot stat blocks
export const aboutSnapshot = [
  { value: "Rome, Italy",                    label: "Origin" },
  { value: "Berlin, Germany",                label: "Base" },
  { value: "Student",                        label: "Current Role" },
  { value: "Business · Economics · Data",    label: "Focus" },
];

export const skills = [
  {
    category: "Software & Tools",
    items: [
      "Python (Data Analysis)",
      "MySQL",
      "PostgreSQL",
      "Tableau",
      "Excel",
      "Git",
      "Power BI",
      "Jira",
      "Confluence",
    ],
  },
  {
    category: "Python Ecosystem",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Plotly",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    category: "Finance & Strategy",
    items: [
      "Financial Analysis",
      "Investment Evaluation",
      "Credit Risk",
      "Revenue Modelling",
      "Executive Reporting",
      "Stakeholder Communication",
    ],
  },
];

export const miscellaneous = [
  {
    label: "Sports",
    value: "Hwa Rang Do World Title (2016) · Rome Marathon (2019)",
  },
  {
    label: "Music",
    value: "Pianist, Jugend Musiziert competition, international performance in Istanbul",
  },
  {
    label: "Volunteering",
    value:
      "Operation Smile Italy (2015) · Don Guanella Village martial arts instructor (2017)",
  },
  {
    label: "Initiatives",
    value:
      "Co-founder, school newspaper (DS Rom 2015) · International Mentor & Student Council Rep, FU Berlin (2021–24)",
  },
  {
    label: "Awards",
    value: "Imperial Business School Award for Excellence",
  },
  {
    label: "Languages",
    value:
      "Fluent: Italian, English, German · Conversational: French, Spanish · Basic: Russian, Arabic",
  },
  {
    label: "Citizenship",
    value: "Italian · American",
  },
];

export type Experience = {
  organisation: string;
  role: string;
  location: string;
  period: string;
  bullets?: string[];
  note?: string;
};

export const experience: Experience[] = [
  {
    organisation: "Pax Humana Foundation",
    role: "Project Manager",
    location: "Rome, Italy (Hybrid)",
    period: "Feb 2024 – Dec 2025",
    note: "Progressed: Intern → Assistant Project Manager → Project Manager",
    bullets: [
      "Contributed to the drafting and structuring of multi-party revenue-sharing agreements within public-private partnerships across the extractive sector.",
      "Participated in high-level investment discussions with private and institutional stakeholders across multiple continents, supporting strategic positioning and negotiation processes.",
      "Produced structured analytical reports, financial briefings, and market analyses to support investment evaluation and executive decision-making.",
      "Built and maintained cross-sector stakeholder relationships spanning government, private sector, and civil society across Europe, Africa, and the Middle East.",
      "Oversaw internal financial documentation and payment tracking, coordinating with external accountants to ensure compliance and reporting accuracy.",
    ],
  },
  {
    organisation: "Private Tutoring",
    role: "Mathematics Tutor",
    location: "Online",
    period: "Oct 2023 – Present",
    bullets: [
      "Private mathematics tutor to high school students, covering core curriculum through advanced topics.",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────

export type TechGroup = {
  label: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  institution: string;
  description: string[];
  techGroups: TechGroup[];
  dataset: string;
  links: {
    app?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "geopolitical-shocks",
    title: "Geopolitical Shocks and Commodity Markets",
    subtitle: "Predicting WTI Crude Oil Price Movements Using Machine Learning",
    year: "2026",
    institution: "Imperial College Business School",
    description: [
      "This project investigates whether geopolitical events have a measurable and predictable effect on WTI crude oil prices, and whether machine learning models can detect and quantify that effect. Oil is the world's most traded commodity and its price affects everything from airline tickets to heating bills, making accurate price signal detection genuinely valuable for investors, energy companies, and policymakers alike.",
      "Three key findings emerge from the analysis. First, machine learning models can predict WTI price levels with very high accuracy, achieving an R2 of 0.974 on unseen data. However this performance is largely explained by price momentum rather than geopolitical insight: the model is essentially observing that today's oil price tends to be close to yesterday's. Second, when momentum is removed from the analysis by predicting daily price deviations from trend instead of the price level itself, geopolitical variables including conflict event counts across the Middle East and North Africa and country-level risk scores for Russia, Israel, and Saudi Arabia emerge as genuine contributors, explaining approximately 10 percent of daily price surprises. Third, this geopolitical signal is not constant: it appears most strongly during acute supply-side disruptions such as the COVID crash and the Ukraine invasion, and fades during demand-driven or low-volatility market periods.",
      "The central conclusion is that geopolitical risk has a real but conditional effect on short-term oil prices. The 10 percent explained by Part 2 is the floor of what a better-specified model could achieve. With more granular conflict data, satellite monitoring of energy infrastructure, and options market volatility as a real-time signal, this approach could be developed into a practical commodity risk tool. This project is a proof of concept for a longer research programme.",
    ],
    techGroups: [
      {
        label: "Analysis & Modelling",
        items: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-learn",
          "XGBoost",
          "Statsmodels",
          "Matplotlib",
          "Seaborn",
          "Plotly",
        ],
      },
      {
        label: "Deployment & Data",
        items: [
          "Streamlit",
          "yfinance",
          "ACLED",
          "FRED",
          "Caldara-Iacoviello GPR Index",
        ],
      },
    ],
    dataset: "14,609 daily observations · 1986–2025 · 43 features · 10 sources",
    links: {
      app: "https://milogaida-imperial-capstone-project-app-p7doeo.streamlit.app",
      github: "https://github.com/milogaida/Imperial_Capstone_Project",
    },
  },
];

// ── Education / Credentials ───────────────────────────────────

export type Credential = {
  institution: string;
  qualification: string;
  period: string;
  grade?: string;
  noteLabel?: string;
  note?: string;
  status?: "completed" | "upcoming";
};

// Ordered most recent first
export const credentials: Credential[] = [
  {
    institution: "Freie Universität Berlin",
    qualification: "BSc Economics",
    period: "Starting October 2026",
    noteLabel: "Focus",
    note: "Quantitative Methods · Econometrics · Time Series Analysis · Data Science",
    status: "upcoming",
  },
  {
    institution: "Imperial College Business School, London",
    qualification: "Professional Certificate in Data Analytics",
    period: "May 2026",
    grade: "Grade: 1.0 · Award for Excellence",
    noteLabel: "Thesis",
    note: "Geopolitical Shocks and Commodity Markets: Using machine learning to isolate the price of conflict in global commodity markets",
    status: "completed",
  },
  {
    institution: "Freie Universität Berlin",
    qualification: "BSc Business Administration",
    period: "April 2025",
    grade: "Grade: 2.0",
    noteLabel: "Thesis",
    note: "Can Business Support Peace in the Sahel? International Investment and Local Economic Development",
    status: "completed",
  },
];

// Nav order: About · Experience · Education · Projects · Contact
export const nav = [
  { label: "About",      href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Education",  href: "/education" },
  { label: "Projects",   href: "/projects" },
  { label: "Contact",    href: "/contact" },
];
