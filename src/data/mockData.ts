import {
  Job,
  JobCategory,
  Testimonial,
  SuccessStory,
  BlogPost,
  Company,
} from "../types";
export const recentJobs: Job[] = [
  // ------------------- Hospitality -------------------
  {
    id: "101",
    title: "Front Desk Receptionist",
    company: "GrandView Hotel",
    location: "New York, NY",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    description:
      "Welcome guests, manage reservations, and ensure a smooth check-in/check-out experience.",
    source: "Hospitality",
    postedDate: "2 days ago",
    logo: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  // ------------------- Warehouse & Logistics -------------------
  {
    id: "201",
    title: "Warehouse Associate",
    company: "Global Logistics",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$18 - $22/hr",
    description:
      "Pick, pack, and ship orders in a fast-paced warehouse environment.",
    source: "Warehouse & Logistics",
    postedDate: "3 days ago",
    logo: "https://images.pexels.com/photos/4483777/pexels-photo-4483777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "403",
    title: "Site Supervisor",
    company: "Skyline Builders",
    location: "Atlanta, GA",
    type: "Full-time",
    salary: "$65,000 - $80,000",
    description:
      "Oversee construction crews, manage project timelines, and ensure compliance.",
    source: "Construction",
    postedDate: "5 days ago",
    logo: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  // ------------------- Healthcare -------------------
  {
    id: "301",
    title: "Registered Nurse (RN)",
    company: "CareWell Hospital",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Provide patient care, administer medications, and support physicians.",
    source: "Healthcare",
    postedDate: "2 days ago",
    logo: "https://images.pexels.com/photos/6129504/pexels-photo-6129504.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "103",
    title: "Hotel Housekeeper",
    company: "Seaside Resort",
    location: "Miami, FL",
    type: "Full-time",
    salary: "$30,000 - $38,000",
    description:
      "Maintain cleanliness of guest rooms and ensure a welcoming environment.",
    source: "Hospitality",
    postedDate: "4 days ago",
    logo: "https://images.pexels.com/photos/3771095/pexels-photo-3771095.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "202",
    title: "Forklift Operator",
    company: "Speedy Distribution",
    location: "Columbus, OH",
    type: "Full-time",
    salary: "$20 - $25/hr",
    description:
      "Operate forklifts to load and unload inventory safely and efficiently.",
    source: "Warehouse & Logistics",
    postedDate: "1 week ago",
    logo: "https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "102",
    title: "Restaurant Server",
    company: "Urban Bistro",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$15 - $20/hr + tips",
    description:
      "Provide excellent dining service, take orders, and maintain customer satisfaction.",
    source: "Hospitality",
    postedDate: "1 day ago",
    logo: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  // ------------------- Construction -------------------
  {
    id: "401",
    title: "Construction Laborer",
    company: "BuildRight Contractors",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$20 - $24/hr",
    description:
      "Assist with site preparation, load/unload materials, and follow safety standards.",
    source: "Construction",
    postedDate: "3 days ago",
    logo: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "203",
    title: "Delivery Driver",
    company: "QuickShip Couriers",
    location: "Remote / Local Routes",
    type: "Contract",
    salary: "$22/hr + mileage",
    description:
      "Deliver packages promptly and safely to customers within assigned routes.",
    source: "Warehouse & Logistics",
    postedDate: "5 days ago",
    logo: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "302",
    title: "Medical Assistant",
    company: "Bright Health Clinic",
    location: "Houston, TX",
    type: "Full-time",
    salary: "$40,000 - $50,000",
    description:
      "Assist doctors with patient prep, take vitals, and manage medical records.",
    source: "Healthcare",
    postedDate: "6 days ago",
    logo: "https://images.pexels.com/photos/4586990/pexels-photo-4586990.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "303",
    title: "Pharmacy Technician",
    company: "City Pharmacy",
    location: "Phoenix, AZ",
    type: "Part-time",
    salary: "$18 - $22/hr",
    description:
      "Prepare prescriptions, assist pharmacists, and manage inventory.",
    source: "Healthcare",
    postedDate: "1 week ago",
    logo: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },

  {
    id: "402",
    title: "Electrician Apprentice",
    company: "Metro Power Solutions",
    location: "Seattle, WA",
    type: "Apprenticeship",
    salary: "$19 - $23/hr",
    description:
      "Support senior electricians with installations, wiring, and maintenance tasks.",
    source: "Construction",
    postedDate: "2 days ago",
    logo: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export const jobCategories: JobCategory[] = [
  {
    id: "1",
    name: "Information Technology",
    icon: "Monitor",
    jobCount: 1250,
    description: "Software, IT Support, Cybersecurity",
  },
  {
    id: "2",
    name: "Healthcare",
    icon: "Heart",
    jobCount: 890,
    description: "Nursing, Medical, Healthcare Admin",
  },
  {
    id: "3",
    name: "Marketing",
    icon: "TrendingUp",
    jobCount: 567,
    description: "Digital Marketing, Content, SEO",
  },
  {
    id: "4",
    name: "Finance",
    icon: "DollarSign",
    jobCount: 734,
    description: "Accounting, Banking, Investment",
  },
  {
    id: "5",
    name: "Engineering",
    icon: "Settings",
    jobCount: 456,
    description: "Mechanical, Civil, Electrical",
  },
  {
    id: "6",
    name: "Education",
    icon: "GraduationCap",
    jobCount: 345,
    description: "Teaching, Training, Administration",
  },
  {
    id: "7",
    name: "Sales",
    icon: "Target",
    jobCount: 678,
    description: "Inside Sales, Account Management",
  },
  {
    id: "8",
    name: "Human Resources",
    icon: "Users",
    jobCount: 234,
    description: "Recruiting, HR Management, Training",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    content:
      "Talent Source helped me land my dream job at Google. The platform is incredibly user-friendly and the job recommendations were spot-on.",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Microsoft",
    content:
      "The quality of job postings on Talent Source is exceptional. I found multiple opportunities that matched my skills perfectly.",
    avatar:
      "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "Amazon",
    content:
      "Talent Source connected me with top-tier companies I never would have found elsewhere. Highly recommended!",
    avatar:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Alex Thompson",
    beforeRole: "Junior Developer",
    afterRole: "Senior Software Engineer",
    company: "Meta",
    story:
      "Through Talent Source, I connected with a recruiter at Meta who helped me transition from a junior role to a senior position with a 70% salary increase.",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    timeframe: "3 months",
  },
  {
    id: "2",
    name: "Lisa Park",
    beforeRole: "Marketing Coordinator",
    afterRole: "VP of Marketing",
    company: "Stripe",
    story:
      "The career resources and networking opportunities on Talent Source were invaluable in helping me climb the career ladder.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    timeframe: "6 months",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Tips for Acing Your Next Job Interview",
    excerpt:
      "Master the art of interviewing with these proven strategies that have helped thousands of candidates land their dream jobs.",
    author: "Career Coach Team",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Interview Tips",
  },
  {
    id: "2",
    title: "How to Write a Resume That Gets You Hired in 2024",
    excerpt:
      "Learn the latest trends in resume writing and discover what recruiters are really looking for in today's job market.",
    author: "Resume Experts",
    publishDate: "2024-01-10",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/5912319/pexels-photo-5912319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Resume Writing",
  },
  {
    id: "3",
    title: "Salary Negotiation: Getting the Pay You Deserve",
    excerpt:
      "Master the art of salary negotiation with these expert tips and strategies for maximizing your earning potential.",
    author: "Salary Experts",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Career Growth",
  },
];

export const partnerCompanies: Company[] = [
  {
    id: "1",
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: "2",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    id: "3",
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: "4",
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: "5",
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: "6",
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

export const jobSources = [
  "All Sources",
  "Hospitality",
  "Warehouse & Logistics",
  "Healthcare",
  "Construction",
];
