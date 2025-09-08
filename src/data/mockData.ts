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
    company: "Grand Hotel",
    location: "New York, NY",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    description:
      "Welcome guests, manage reservations, and ensure a smooth check-in/check-out experience.",
    source: "Hospitality",
    postedDate: "2 days ago",
    logo: "https://img.pikbest.com/origin/09/34/43/59SpIkbEsTpiB.png!w700wp",
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
    logo: "https://i.pinimg.com/originals/eb/82/ec/eb82ec16c6eed6c789712eff9472310c.jpg",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bIEvsxuIsMHDCpnqUdEc8trzQkJhgaZVGQ&s",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosk3ed9fw0ZGRArsfI1ukT1v3gFthD4tmtg&s",
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
    logo: "https://thumbs.dreamstime.com/b/seaside-hotel-logo-palm-trees-sun-blue-yellow-emblem-vector-template-93787519.jpg",
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
    logo: "https://images.seeklogo.com/logo-png/24/2/speedy-logo-png_seeklogo-246686.png",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pGB0ZyEy0NBs1sOigh4GZwf9B0f90OeCMw&s",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8r_9rdR_bbGqP6tQYCbcDKLBKR_6sHykn0Wc7i7adx11OT7tosNErC6ruM3YG85cUCsY&usqp=CAU",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Gqg2bhV3hHwJ5nk37VCVibZS1TaREs27Bg&s",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkn7Yosd95GREF3BXiTpR9wy_HK0Gdp8jT-w&s",
  },
  {
    id: "303",
    title: "Pharmacy Technician",
    company: "Pharma City",
    location: "Phoenix, AZ",
    type: "Part-time",
    salary: "$18 - $22/hr",
    description:
      "Prepare prescriptions, assist pharmacists, and manage inventory.",
    source: "Healthcare",
    postedDate: "1 week ago",
    logo: "https://i.pinimg.com/474x/f6/ef/7f/f6ef7f5b9e9687ff25097daccd3d2630.jpg",
  },

  {
    id: "402",
    title: "Electrician Apprentice",
    company: "Metro Power",
    location: "Seattle, WA",
    type: "Apprenticeship",
    salary: "$19 - $23/hr",
    description:
      "Support senior electricians with installations, wiring, and maintenance tasks.",
    source: "Construction",
    postedDate: "2 days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qKPTXy94LZuqDDvU_vKoQ65oy08Owz3CjQ&s",
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
