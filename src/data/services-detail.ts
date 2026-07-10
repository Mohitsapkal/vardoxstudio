export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Video" | "Megaphone" | "Palette" | "TrendingUp" | "Users" | "Target";
  whatWeProvide: string[];
  howItWorks: { step: number; title: string; description: string }[];
  benefits: string[];
  technologiesUsed: string[];
  estimatedTimeline: string;
  bestFor: string[];
  accentColor: string; // Hex color for highlights
  bgGradient: string; // Gradient class for cards/highlights
  image: string; // Image URL
  completedProjects: {
    title: string;
    client: string;
    results: string;
  }[];
  successMetrics: {
    label: string;
    value: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesDetailData: Record<string, ServiceDetail> = {
  "video-production": {
    id: "video-production",
    title: "Video Production & Editing",
    shortDescription: "Elevate your brand with cinematic, high-impact video content. From ideation to final cut, we deliver visuals that tell compelling stories, drive engagement, and convert viewers into loyal customers.",
    iconName: "Video",
    whatWeProvide: [
      "Custom Scriptwriting & Storyboarding",
      "4K/6K Cinematic Filming",
      "Advanced Post-Production & VFX",
      "Color Grading & Sound Design",
      "Optimized Social Media Formats",
      "Live Event Coverage & Recaps",
      "Drone & Aerial Cinematography",
      "Product & Commercial Video Production"
    ],
    howItWorks: [
      { step: 1, title: "Creative Brief & Ideation", description: "Define goals, audience, and creative concepts." },
      { step: 2, title: "Scriptwriting & Planning", description: "Develop the storyboard, scripts, and pre-production scheduling." },
      { step: 3, title: "Production & Filming", description: "High-end filming on location or in-studio with cinematic gear." },
      { step: 4, title: "Post-Production & Polish", description: "Video editing, sound engineering, color grading, and adding motion graphics." },
      { step: 5, title: "Review & Launch", description: "Deliver drafts for review, incorporate feedback, and deliver final files." }
    ],
    benefits: [
      "Higher Audience Retentivity",
      "Premium Brand Representation",
      "Professional Cinematic Standards",
      "Tailored for Multiple Platforms",
      "End-to-End Hassle-free Production",
      "Boosted Conversion Rates",
      "Optimized Storytelling and Visual Style",
      "Dynamic Sound & Motion Graphics Integration"
    ],
    technologiesUsed: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Red Giant", "Audition"],
    estimatedTimeline: "2-6 Weeks Based on Scope",
    bestFor: ["Brands", "E-commerce", "Corporate", "Agencies"],
    accentColor: "#ff7a3d",
    bgGradient: "from-[#ff7a3d] to-[#ff5757]",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "Ignite Energy Launch Promo", client: "Ignite Co.", results: "2.4M Views, +180% Engagement" },
      { title: "Modern Workspaces Series", client: "HubSpace LLC", results: "+45% Inbound Lead Gen" }
    ],
    successMetrics: [
      { label: "Total Views", value: "15M+" },
      { label: "Average CTR", value: "8.5%" },
      { label: "Engagement", value: "+240%" }
    ],
    whyChooseUs: [
      { title: "Award-Winning Crew", description: "Filmed by directors with Netflix & commercial credits." },
      { title: "Netflix-Grade Gear", description: "Shot on RED & Sony cinema setups with prime lenses." },
      { title: "Fast Turnaround", description: "Optimized pipelines mean you get high quality videos on time." }
    ],
    faqs: [
      { question: "What equipment do you use for filming?", answer: "We use industry-standard cinema cameras (RED/ARRI/Sony FX series), premium prime lenses, professional stabilizers, and high-end lighting gear." },
      { question: "Do we own the final raw footage?", answer: "Ownership of raw footage depends on the agreed package. By default, you receive fully edited commercial assets, but raw footage buyouts are available." },
      { question: "How many revisions are included?", answer: "We include up to 2 rounds of creative revisions on the drafts to ensure the final cut perfectly matches your expectations." }
    ]
  },
  "social-media": {
    id: "social-media",
    title: "Social Media Management",
    shortDescription: "Scale your digital footprint with strategic content scheduling, community management, and trend-focused campaign optimization. We help brands build active, loyal, and highly-engaged online communities.",
    iconName: "Megaphone",
    whatWeProvide: [
      "Multi-Platform Channel Management",
      "Daily Content Creation & Curation",
      "High-Performance Hashtag & SEO Strategy",
      "Active Community Engagement",
      "Analytical Reports & Competitor Benchmarking",
      "Creative Reel & TikTok Scripts",
      "Monthly Content Calendar Design",
      "Social Listening & Reputation Protection"
    ],
    howItWorks: [
      { step: 1, title: "Social Audit", description: "Analyze your current performance, competitors, and audience behavior." },
      { step: 2, title: "Strategy & Persona", description: "Define your brand voice, content pillars, and key metrics." },
      { step: 3, title: "Content Creation", description: "Design graphics, draft copy, and produce short-form video assets." },
      { step: 4, title: "Scheduling & Engagement", description: "Publish at optimal times and interact with your followers daily." },
      { step: 5, title: "Optimization & Reports", description: "Monitor analytics, adjust tactics, and deliver monthly reports." }
    ],
    benefits: [
      "Consistent Brand Presence",
      "Organically Grown Community",
      "Improved Search Engine Visibility",
      "Higher Lead Quality",
      "Streamlined Publishing Workflows",
      "Access to Real-time Social Trends",
      "Professional Brand Advocacy",
      "Clear ROI Tracking"
    ],
    technologiesUsed: ["Figma", "Notion", "Later", "Meta Business Suite", "Sprout Social", "Canva"],
    estimatedTimeline: "Monthly Retainer / Ongoing",
    bestFor: ["Startups", "Creator Brands", "E-commerce", "Local Businesses"],
    accentColor: "#9d7eff",
    bgGradient: "from-[#9d7eff] to-[#7b5cff]",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "Organic Scale-Up", client: "Glow Skin Co.", results: "+150K Followers in 3 Months" },
      { title: "B2B LinkedIn Authority", client: "CloudSecure", results: "+310% Inbound Leads" }
    ],
    successMetrics: [
      { label: "Avg Growth", value: "+350%" },
      { label: "Monthly Reach", value: "8M+" },
      { label: "Conversion Rate", value: "+18%" }
    ],
    whyChooseUs: [
      { title: "Trend-First Crew", description: "We hop on trends within hours, ensuring your brand stays top-of-mind." },
      { title: "Data-Driven Logic", description: "We don't just post; we analyze metrics to maximize organic reach." },
      { title: "Dedicated Support", description: "You get a dedicated account manager and a Slack channel for instant communication." }
    ],
    faqs: [
      { question: "Which platforms do you manage?", answer: "We manage Instagram, LinkedIn, YouTube, TikTok, Facebook, and Pinterest." },
      { question: "Do you handle customer inquiries in comments/DMs?", answer: "Yes, we handle basic community engagement and triage customer inquiries based on a pre-approved FAQ document." },
      { question: "How do we approve posts before they go live?", answer: "We share a digital content planner weekly/monthly, and nothing goes live without your final approval." }
    ]
  },
  "branding": {
    id: "branding",
    title: "Branding & Design",
    shortDescription: "Establish a memorable, luxury visual identity. We craft bespoke logos, curated typography systems, and comprehensive style guides that resonate with premium audiences and build immediate trust.",
    iconName: "Palette",
    whatWeProvide: [
      "Bespoke Logo Design & Variations",
      "Curated Typography & Font Pairing",
      "Luxury Color Palette Formulation",
      "Comprehensive Brand Guidelines (PDF)",
      "Custom Vector Brand Patterns",
      "Print & Digital Asset Design",
      "Corporate Stationery Templates",
      "Brand Voice & Messaging Consultation"
    ],
    howItWorks: [
      { step: 1, title: "Discovery & Moodboards", description: "Understand your values, target market, and define visual moods." },
      { step: 2, title: "Logo Design Concepting", description: "Draft multiple unique concepts exploring vector structures." },
      { step: 3, title: "Visual System Development", description: "Flesh out typography, colors, patterns, and templates." },
      { step: 4, title: "Brand Guidelines Compilation", description: "Document usage rules, spacing, and application constraints." },
      { step: 5, title: "Brand Handover", description: "Deliver complete high-resolution visual files and style guide." }
    ],
    benefits: [
      "Cohesive Multi-Platform Image",
      "Premium Brand Recognition",
      "Instant Trust and Credibility",
      "Scalable Identity Formats",
      "Clear Visual Guidelines",
      "Distinct Competitive Edge",
      "Emotional Connection with Audience",
      "Higher Perceived Value"
    ],
    technologiesUsed: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign", "FontForge"],
    estimatedTimeline: "3-5 Weeks Based on Scope",
    bestFor: ["Enterprises", "Real Estate", "Healthcare", "Fashion Brands"],
    accentColor: "#ff4757",
    bgGradient: "from-[#ff4757] to-[#ff5757]",
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "Heritage Identity Refresh", client: "Luxe Estates", results: "+25% Brand Value Increase" },
      { title: "Fintech Logo System", client: "PaySphere", results: "Successful $12M Series A Branding" }
    ],
    successMetrics: [
      { label: "Recognition", value: "+90%" },
      { label: "Consistency Score", value: "100%" },
      { label: "Client Rating", value: "4.9/5" }
    ],
    whyChooseUs: [
      { title: "Minimalist Luxury Style", description: "We specialize in modern visual designs that capture luxury markets." },
      { title: "Full IP Transfer", description: "Upon project completion, 100% intellectual property ownership of the assets is yours." },
      { title: "Global Market Focus", description: "We design elements that resonate across diverse geographic and digital platforms." }
    ],
    faqs: [
      { question: "Will we own the copyrights to our new branding?", answer: "Yes! Upon final payment, 100% intellectual property ownership of the logo and assets is transferred to you." },
      { question: "Can you update an existing logo instead of starting from scratch?", answer: "Absolutely, we offer visual refresh services that preserve your heritage while modernizing your logo and style." },
      { question: "What formats will the files be delivered in?", answer: "We deliver vector source files (.AI, .EPS, .SVG, .PDF) and optimized digital versions (.PNG, .JPG) for web and print." }
    ]
  },
  "advertising": {
    id: "advertising",
    title: "Advertising Campaigns",
    shortDescription: "Drive immediate sales and high-quality leads with data-driven paid advertising. We design, deploy, and continuously optimize campaigns across Search, Social, and Video networks to maximize return on ad spend.",
    iconName: "TrendingUp",
    whatWeProvide: [
      "Cross-Channel Campaign Audits",
      "High-Converting Ad Creative & Copy",
      "Highly Targeted Audience Building",
      "Continuous A/B testing",
      "Conversion Rate Optimization",
      "Retargeting Funnel Architecture",
      "Real-Time Custom Reporting Dashboards",
      "Pixel & Tag Manager Setup"
    ],
    howItWorks: [
      { step: 1, title: "Funnel Strategy", description: "Identify friction points, define tracking pixels, and budget structures." },
      { step: 2, title: "Creative Assets", description: "Produce professional advertising copy, designs, and videos." },
      { step: 3, title: "Launch & Testing", description: "Deploy campaigns, target precise interests, and test 10+ variations." },
      { step: 4, title: "Daily Optimization", description: "Adjust bids, exclude poor audiences, and scale winning assets." },
      { step: 5, title: "Report & Scale", description: "Provide clear dashboards, calculate exact CAC, and double down." }
    ],
    benefits: [
      "Maximum Return on Ad Spend (ROAS)",
      "Immediate Influx of Targeted Leads",
      "Predictive Growth Modeling",
      "Reduced Customer Acquisition Cost (CAC)",
      "Brand Dominance on Search & Social",
      "Continuous Conversion Optimization",
      "Deep Target Demographics Insight",
      "Clear Attributable ROI"
    ],
    technologiesUsed: ["Google Ads Manager", "Meta Ads Manager", "TikTok Ads Manager", "Google Analytics 4", "Hotjar", "Shopify"],
    estimatedTimeline: "Setup in 2 Weeks, Then Retainer",
    bestFor: ["E-commerce", "SaaS", "Real Estate", "Service Businesses"],
    accentColor: "#3dd9a8",
    bgGradient: "from-[#3dd9a8] to-[#2eceb4]",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "Holiday Growth Spurt", client: "TrendWear E-com", results: "5.4x ROAS, $420K Revenue" },
      { title: "Lead Engine Campaign", client: "MedGroup Clinics", results: "-42% Cost Per Lead (CPL)" }
    ],
    successMetrics: [
      { label: "Avg Campaign ROAS", value: "4.8x" },
      { label: "Saved Ad Budget", value: "+30%" },
      { label: "Leads Generated", value: "120K+" }
    ],
    whyChooseUs: [
      { title: "Certified Partners", description: "We are official Meta & Google Ads Partners with proven credentials." },
      { title: "Creative + Analytical", description: "We combine psychological copywriting with advanced data analytics." },
      { title: "No Locked Contracts", description: "We earn your trust monthly, with flexible terms and transparent work." }
    ],
    faqs: [
      { question: "What is the minimum ad budget you work with?", answer: "We recommend starting with a minimum media spend of $1,500/month to ensure statistical relevance during testing." },
      { question: "Do your fees include the actual advertising budget?", answer: "No, our service fee is separate. You pay the networks (Google, Meta) directly for the ad spend." },
      { question: "How often do you optimize the campaigns?", answer: "We review and optimize bids, keywords, and audience targeting daily to prevent budget leakage." }
    ]
  },
  "influencer": {
    id: "influencer",
    title: "Influencer Marketing",
    shortDescription: "Leverage social proof and authentic endorsements. We connect your brand with high-vibe influencers, manage contract negotiations, and craft creative briefs that result in viral, trustworthy product showcases.",
    iconName: "Users",
    whatWeProvide: [
      "Direct Creator Vetting & Outreach",
      "Campaign Brief Writing & Creative Control",
      "Legal Contracts & Royalty Management",
      "Product Gifting & Seeding Operations",
      "Content Co-Creation Oversight",
      "Campaign Tracking & Promo Codes",
      "Brand Ambassador Program Setup",
      "Paid Whitelisting & Creator Amplification"
    ],
    howItWorks: [
      { step: 1, title: "Talent Search", description: "Identify micro and macro influencers aligning with your demographics." },
      { step: 2, title: "Negotiation & Contracting", description: "Secure favorable usage rights, rates, and publishing commitments." },
      { step: 3, title: "Creative Briefing", description: "Equip creators with product details and key brand messages." },
      { step: 4, title: "Production Review", description: "Verify content compliance and quality before publication." },
      { step: 5, title: "Post-Campaign Analysis", description: "Compile final engagement metrics, reach, and sales attribution." }
    ],
    benefits: [
      "High Authenticity & Credibility",
      "Viral Brand Reach",
      "High-Quality User Generated Content (UGC)",
      "Direct Access to Niche Communities",
      "Improved Organic Brand Trust",
      "High-converting Social Proof",
      "Amplified SEO Value via Social Links",
      "Lower Content Production Cost"
    ],
    technologiesUsed: ["Grin", "HypeAuditor", "Modash", "Notion", "Slack", "Excel"],
    estimatedTimeline: "4-8 Weeks Per Campaign",
    bestFor: ["Consumer Goods", "Fashion", "Lifestyle", "Apps"],
    accentColor: "#f4f157",
    bgGradient: "from-[#f4f157] to-[#d4c82b]",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "App Launch Blast", client: "FitLife App", results: "12M+ Impressions, 80K Installs" },
      { title: "Luxury Cosmetics Gifting", client: "Aura Skincare", results: "+280% IG Tagged Stories" }
    ],
    successMetrics: [
      { label: "Total Reach", value: "20M+" },
      { label: "Engagement Rate", value: "5.2%" },
      { label: "UGC Assets Created", value: "450+" }
    ],
    whyChooseUs: [
      { title: "Vetted Creator Roster", description: "Direct personal relationships with premium influencers across niches." },
      { title: "Rigorous Fraud Audit", description: "We analyze fake followers and comment authenticity before spending a dime." },
      { title: "End-to-End Execution", description: "From matching to mailing products, we manage the entire workflow." }
    ],
    faqs: [
      { question: "Do you work with micro-influencers or celebrities?", answer: "We work with both! We focus on micro-influencers (10K–100K followers) for engagement, and macro-creators for massive brand awareness." },
      { question: "How do you verify if an influencer has real followers?", answer: "We run every candidate through advanced auditing tools to check engagement rate, audience demographics, and spot bot networks." },
      { question: "Do we own the rights to the content creators make?", answer: "We negotiate content usage rights in all contracts, allowing you to use their UGC in paid ads for 30–90 days (or perpetuity depending on budget)." }
    ]
  },
  "strategy": {
    id: "strategy",
    title: "Content Strategy",
    shortDescription: "Transform your marketing into a high-yield asset. We build data-backed, comprehensive content blueprints detailing exactly what, where, and when to publish to maximize market share, authority, and organic traffic.",
    iconName: "Target",
    whatWeProvide: [
      "Deep Market & Competitor Research",
      "Actionable Content Marketing Blueprints",
      "In-Depth Keywords & Topic Clusters",
      "Creative Storytelling Frameworks",
      "Distribution & Syndication Strategy",
      "Custom ROI Attribution Architecture",
      "Team Workflows & SOP Documentation",
      "Content Audit & Gap Analysis"
    ],
    howItWorks: [
      { step: 1, title: "Discovery Workshop", description: "Conduct intensive stakeholder interviews to map business objectives." },
      { step: 2, title: "Research & Audit", description: "Audit existing content, map search queries, and analyze competitors." },
      { step: 3, title: "Strategy Synthesis", description: "Develop content calendars, topic clusters, and distribution paths." },
      { step: 4, title: "Systems Setup", description: "Configure analytics tracking, workflow tools, and editorial standards." },
      { step: 5, title: "Execution Training", description: "Train your in-house team or hand over to our execution squad." }
    ],
    benefits: [
      "Unified Editorial Vision",
      "Significantly Higher SEO Authority",
      "Maximized Content Shelf-Life",
      "Data-driven Publishing Decisions",
      "Higher Lead-to-Customer Velocity",
      "Clear ROI Measurement",
      "Elimination of Wasted Content Efforts",
      "Future-Proof Organic Pipeline"
    ],
    technologiesUsed: ["Ahrefs", "Semrush", "Notion", "Google Search Console", "Miro", "Google Analytics 4"],
    estimatedTimeline: "4-6 Weeks",
    bestFor: ["Enterprises", "B2B SaaS", "Health & Wellness", "Finance Platforms"],
    accentColor: "#9d7eff",
    bgGradient: "from-[#9d7eff] to-[#7b5cff]",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    completedProjects: [
      { title: "SEO Domination Roadmap", client: "FinCorp LLC", results: "+400% Org Traffic, Rank #1 for 120+ Keywords" },
      { title: "Rebranding Strategy Plan", client: "MedCare Clinics", results: "Cohesive Messaging launched in 14 locations" }
    ],
    successMetrics: [
      { label: "Top 10 Rankings", value: "+140%" },
      { label: "Organic Traffic", value: "+280%" },
      { label: "Lead Quality", value: "+65%" }
    ],
    whyChooseUs: [
      { title: "Pragmatic Blueprints", description: "We don't sell bloated reports. We provide actionable task lists and templates." },
      { title: "Deep SEO Knowledge", description: "Our strategies are heavily optimized for modern search engines and AI engines." },
      { title: "ROI Attribution Focus", description: "We build tracking frameworks so you know exactly which articles generate cash." }
    ],
    faqs: [
      { question: "How long does it take to see results from a content strategy?", answer: "Organic content and SEO strategies generally begin to show compounding results within 3 to 6 months of execution." },
      { question: "What does the final strategy deliverable look like?", answer: "You receive a comprehensive digital workspace (Notion) containing keyword lists, content calendars, competitor analyses, publishing guidelines, and templates." },
      { question: "Do you help write the content, or just provide the strategy?", answer: "We offer both. You can purchase the strategy alone to execute with your internal team, or hire our content production crew to handle writing and design." }
    ]
  }
};
