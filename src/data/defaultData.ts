import { Member, Placement, Pitch, CurriculumTopic, EducationVP } from '../types';

export const fallbackMembers: Member[] = [
  { name: 'Alexander Morrison', position: 'President', year: '2026', major: 'Economics', bio: 'Passionate about growth equity and technology investing. Previously interned at General Atlantic.', photo_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Sophia Bennett', position: 'VP of Education - Fundamental', year: '2026', major: 'Business Administration', bio: 'Specializes in consumer and retail sector analysis. Former intern at L Catterton.', photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Ethan Zhang', position: 'VP of Education - Quantitative', year: '2027', major: 'Computer Science & Statistics', bio: 'Focused on algorithmic trading and machine learning in finance. Published research on factor investing.', photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Olivia Rodriguez', position: 'VP of Research', year: '2026', major: 'Applied Mathematics', bio: 'Covers healthcare and biotechnology. Previously at ARCH Venture Partners.', photo_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Nathan Cooper', position: 'VP of Events', year: '2027', major: 'Economics', bio: 'Builds relationships with industry professionals. Former Goldman Sachs summer analyst.', photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Isabella Chen', position: 'VP of Recruitment', year: '2027', major: 'Data Science', bio: 'Passionate about building diverse teams. Focuses on energy transition investing.', photo_url: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Lucas Martinez', position: 'Senior Analyst', year: '2027', major: 'Finance', bio: 'Specializes in financial services and fintech. Completed coursework at London School of Economics.', photo_url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Ava Thompson', position: 'Senior Analyst', year: '2026', major: 'Computer Science', bio: 'Covers software and internet sectors. Built quantitative screening tools for the club.', photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Mason Kim', position: 'Senior Analyst', year: '2027', major: 'Economics', bio: 'Focuses on industrials and infrastructure. Summer analyst at Carlyle Group.', photo_url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Emma Davis', position: 'Analyst', year: '2028', major: 'Business Administration', bio: 'Interested in consumer brands and retail. Previous experience in private equity at Vista Equity.', photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'William Anderson', position: 'Analyst', year: '2028', major: 'Data Science', bio: 'Passionate about quantitative research and statistical arbitrage strategies.', photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Mia Johnson', position: 'Analyst', year: '2027', major: 'Economics', bio: 'Covers real estate and REITs. Completed real estate finance coursework at Wharton.', photo_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'James Taylor', position: 'Analyst', year: '2028', major: 'Applied Mathematics', bio: 'Focuses on derivatives and options strategies. Member of Berkeley Math Club.', photo_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Charlotte Wilson', position: 'Analyst', year: '2028', major: 'Statistics', bio: 'Interested in credit analysis and fixed income markets. TA for econometrics course.', photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Benjamin Moore', position: 'Analyst', year: '2027', major: 'Computer Science', bio: 'Building automated trading systems. Former software engineering intern at Citadel Securities.', photo_url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Amelia Jackson', position: 'Analyst', year: '2028', major: 'Economics', bio: 'Covers emerging markets and international investing. Studied abroad in Singapore.', photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Henry Lee', position: 'Analyst', year: '2028', major: 'Business Administration', bio: 'Passionate about sustainable investing and ESG integration in portfolio management.', photo_url: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Harper White', position: 'Analyst', year: '2027', major: 'Data Science', bio: 'Focuses on healthcare IT and digital health. Previously at Rock Health venture fund.', photo_url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Daniel Harris', position: 'Analyst', year: '2028', major: 'Economics', bio: 'Interested in macroeconomic analysis and global macro strategies.', photo_url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' },
  { name: 'Ella Martin', position: 'Analyst', year: '2028', major: 'Statistics', bio: 'Covers semiconductor and hardware sectors. Built sector rotation models for club portfolio.', photo_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80', coffee_chat_url: 'https://calendly.com/cib-berkeley' }
];

export const fallbackPlacements: Placement[] = [
  { year: 2025, name: 'Jennifer Wu', company: 'Goldman Sachs', sector: 'Investment Banking', role: 'Analyst' },
  { year: 2025, name: 'Michael Chen', company: 'Sequoia Capital', sector: 'Venture Capital', role: 'Associate' },
  { year: 2025, name: 'Sarah Martinez', company: 'Citadel', sector: 'Hedge Fund', role: 'Quantitative Analyst' },
  { year: 2025, name: 'David Nguyen', company: 'McKinsey & Company', sector: 'Consulting', role: 'Business Analyst' },
  { year: 2024, name: 'Emily Taylor', company: 'BlackRock', sector: 'Asset Management', role: 'Investment Analyst' },
  { year: 2024, name: 'James Park', company: 'JPMorgan Chase', sector: 'Investment Banking', role: 'Analyst' },
  { year: 2024, name: 'Rachel Kim', company: 'Two Sigma', sector: 'Hedge Fund', role: 'Research Analyst' },
  { year: 2024, name: 'Andrew Liu', company: 'Bain & Company', sector: 'Consulting', role: 'Associate Consultant' },
  { year: 2024, name: 'Sophie Anderson', company: 'Andreessen Horowitz', sector: 'Venture Capital', role: 'Investment Analyst' },
  { year: 2023, name: 'Daniel Zhang', company: 'Morgan Stanley', sector: 'Investment Banking', role: 'Analyst' },
  { year: 2023, name: 'Maya Patel', company: 'Bridgewater Associates', sector: 'Hedge Fund', role: 'Investment Associate' },
  { year: 2023, name: 'Christopher Lee', company: 'Boston Consulting Group', sector: 'Consulting', role: 'Consultant' },
  { year: 2023, name: 'Amanda Foster', company: 'Stripe', sector: 'Technology', role: 'Corporate Strategy' },
  { year: 2023, name: 'Kevin Brown', company: 'Point72', sector: 'Hedge Fund', role: 'Research Analyst' },
  { year: 2022, name: 'Lisa Wang', company: 'Credit Suisse', sector: 'Investment Banking', role: 'Analyst' },
  { year: 2022, name: 'Robert Garcia', company: 'Fidelity Investments', sector: 'Asset Management', role: 'Equity Analyst' },
  { year: 2022, name: 'Jessica Tran', company: 'Benchmark Capital', sector: 'Venture Capital', role: 'Associate' },
  { year: 2022, name: 'Nicholas White', company: 'Jane Street', sector: 'Proprietary Trading', role: 'Trader' },
  { year: 2021, name: 'Olivia Johnson', company: 'Lazard', sector: 'Investment Banking', role: 'Analyst' },
  { year: 2021, name: 'Jonathan Silva', company: 'D.E. Shaw', sector: 'Hedge Fund', role: 'Quantitative Researcher' }
];

export const staticPitches: Pitch[] = [
  { 
    company: 'NVIDIA Corporation', 
    ticker: 'NVDA', 
    sector: 'Semiconductors', 
    date: 'March 2026', 
    analyst: 'Sarah Chen', 
    thesis: 'AI accelerator market dominance with expanding TAM in data centers. 40% revenue CAGR expected through 2028 driven by enterprise AI adoption.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Tesla Inc.', 
    ticker: 'TSLA', 
    sector: 'Automotive', 
    date: 'February 2026', 
    analyst: 'Marcus Johnson', 
    thesis: 'Energy storage and FSD revenue streams undervalued. Margins expanding as manufacturing scale economies realized.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Stripe Inc.', 
    ticker: 'Private', 
    sector: 'Fintech', 
    date: 'January 2026', 
    analyst: 'Priya Patel', 
    thesis: 'Payment processing moat with developer-first approach. International expansion driving 30% YoY growth with path to profitability.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Microsoft Corporation', 
    ticker: 'MSFT', 
    sector: 'Software', 
    date: 'December 2025', 
    analyst: 'James Park', 
    thesis: 'Azure AI services capturing enterprise spend. LinkedIn and GitHub creating flywheel effects in professional software.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Moderna Inc.', 
    ticker: 'MRNA', 
    sector: 'Biotechnology', 
    date: 'November 2025', 
    analyst: 'Emily Rodriguez', 
    thesis: 'mRNA platform diversification beyond COVID. Oncology pipeline with 3 phase 3 trials could unlock $50B+ TAM.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Coinbase Global', 
    ticker: 'COIN', 
    sector: 'Cryptocurrency', 
    date: 'October 2025', 
    analyst: 'David Kim', 
    thesis: 'Trading volumes declining with regulatory headwinds. Institutional custody business insufficient to justify current valuation.', 
    position: 'Short',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Shopify Inc.', 
    ticker: 'SHOP', 
    sector: 'E-commerce', 
    date: 'September 2025', 
    analyst: 'Alexandra Wong', 
    thesis: 'SMB platform with expanding merchant solutions. Take rate improvement and logistics monetization driving margin expansion.', 
    position: 'Long',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  { 
    company: 'Rivian Automotive', 
    ticker: 'RIVN', 
    sector: 'Automotive', 
    date: 'August 2025', 
    analyst: 'Thomas Lee', 
    thesis: 'Cash burn unsustainable with production ramp delays. Premium EV market showing demand saturation at current price points.', 
    position: 'Short',
    pdf_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const curriculumSyllabus: CurriculumTopic[] = [
  {
    week: 1,
    title: "Introduction & Club Architecture",
    fundamental: "Introduction to value investing philosophies, business quality assessment, and CIB portfolio frameworks.",
    quantitative: "Infrastructure setup, conda environments, basic financial data ingestion (yfinance, pandas), and code styling."
  },
  {
    week: 2,
    title: "Accounting Mechanics & Quantitative Descriptives",
    fundamental: "Deep dive into three financial statements, operating bridges, non-cash adjustments, and reading 10-Ks.",
    quantitative: "Time-series calculations: logarithmic returns, volatility metrics, Sharpe ratio, and drawdown profiles."
  },
  {
    week: 3,
    title: "Moats, Business Models, and Multi-factor Modeling",
    fundamental: "Competitive advantages: high switching costs, brand power, network effects, cost scale, and porter's forces.",
    quantitative: "Introduction to factor models: Fama-French 3-factor, 5-factor frameworks, regressions, and alpha/beta isolation."
  },
  {
    week: 4,
    title: "Forecasting & Statistical Arbitrage Base",
    fundamental: "Building dynamic top-line forecasting models, modeling margins, operating leverage, and CapEx schedules.",
    quantitative: "Stationarity, cointegration testing, Augmented Dickey-Fuller tests, and constructing a basic pairs-trading script."
  },
  {
    week: 5,
    title: "Discounted Cash Flow & Portfolio Optimization",
    fundamental: "Unlevered FCF derivation, WACC calculation, terminal growth vs exit multiples, and sensitivity tables.",
    quantitative: "Modern Portfolio Theory (MPT): Mean-Variance Optimization, efficient frontier plots, and risk-budget constraints."
  },
  {
    week: 6,
    title: "Comparables & Quantitative Machine Learning Basics",
    fundamental: "Relative valuation: EV/EBITDA, P/E, EV/Sales, and picking authentic peers. Qualitative benchmarking.",
    quantitative: "Pre-processing data, feature engineering (lags, momentum indicators), and decision tree model regressions."
  },
  {
    week: 7,
    title: "Short Selling & Advanced Volatility Dynamics",
    fundamental: "Searching for structural failures: auditing balance sheets, accounting anomalies, and assessing structural decline.",
    quantitative: "Options pricing theory: Black-Scholes, implied volatility skew, and modeling delta/gamma hedging strategies."
  },
  {
    week: 8,
    title: "Investment Memo Architecture & Strategy Backtesting",
    fundamental: "Drafting the ideal investment thesis, structuring the pitch, presenting quantitative and fundamental cases.",
    quantitative: "Backtesting engines: building event-driven backtesters, avoiding look-ahead bias and transaction fee drag."
  }
];

export const educationVPs: { fundamental: EducationVP; quantitative: EducationVP } = {
  fundamental: {
    name: 'Sophia Bennett',
    role: 'VP of Education - Fundamental Analysis',
    photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    initials: 'SB',
    quote: '"Through case studies of real investments and guest speakers from top firms, we bridge academic theory with practical application."',
    bioParagraphs: [
      'Fundamental analysis is the cornerstone of sound investment decision-making. At Capital Investments, we teach our members to look beyond stock prices and understand the underlying businesses driving value creation.',
      'Our curriculum covers financial statement analysis, valuation methodologies including DCF and comparable company analysis, industry research frameworks, and competitive positioning assessment. Members learn to build detailed financial models and develop investment theses that withstand rigorous questioning.'
    ]
  },
  quantitative: {
    name: 'Ethan Zhang',
    role: 'VP of Education - Quantitative Analysis',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    initials: 'EZ',
    quote: '"The intersection of finance and technology is where the most exciting opportunities exist."',
    bioParagraphs: [
      'Quantitative analysis empowers investors to identify patterns, test hypotheses, and make data-driven decisions at scale. In our quantitative track, members learn to leverage statistical methods and computational tools to gain investment edges.',
      'We cover factor investing, backtesting frameworks, portfolio optimization, risk modeling, and machine learning applications in finance. Members gain hands-on experience with Python, R, and industry-standard data platforms to build and validate investment strategies.'
    ]
  }
};

