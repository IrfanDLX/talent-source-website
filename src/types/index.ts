export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  source: string;
  postedDate: string;
  logo?: string;
}

export interface JobCategory {
  id: string;
  name: string;
  icon: string;
  jobCount: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface SuccessStory {
  id: string;
  name: string;
  beforeRole: string;
  afterRole: string;
  company: string;
  story: string;
  image: string;
  timeframe: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  category: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}