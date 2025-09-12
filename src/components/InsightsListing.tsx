import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Eye, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const categories = [
  { id: 'all', name: 'All Categories', count: 24 },
  { id: 'interview-tips', name: 'Interview Tips', count: 8 },
  { id: 'resume-writing', name: 'Resume Writing', count: 6 },
  { id: 'career-growth', name: 'Career Growth', count: 10 }
];

const featuredInsights = [
  {
    id: 'featured-1',
    title: 'The Future of Remote Work: Trends for 2024',
    excerpt: 'Discover how remote work is evolving and what it means for your career.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    category: 'Career Growth',
    readTime: '8 min read',
    publishDate: '2024-01-20'
  },
  {
    id: 'featured-2',
    title: 'AI in Recruitment: What Job Seekers Need to Know',
    excerpt: 'How artificial intelligence is changing the hiring process.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    category: 'Interview Tips',
    readTime: '6 min read',
    publishDate: '2024-01-18'
  }
];

const InsightsListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  const filteredInsights = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
      post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInsightClick = (insight: any) => {
    setSelectedInsight(insight);
  };

  const handleBackToList = () => {
    setSelectedInsight(null);
  };

  if (selectedInsight) {
    return <InsightDetail insight={selectedInsight} onBack={handleBackToList} />;
  }

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="ts-text-h2 font-bold text-black-lite mb-2">
            Career Insights & Resources
          </h1>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Expert advice, industry trends, and actionable tips to accelerate your career growth
          </p>
        </div>

        <div className="lg:flex lg:gap-8">
          {/* Left Sidebar - Categories (Desktop) / Top Section (Mobile) */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            {/* Featured Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-black-lite mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Featured Insights
              </h3>
              <div className="space-y-4">
                {featuredInsights.map((insight) => (
                  <div
                    key={insight.id}
                    className="group cursor-pointer"
                    onClick={() => handleInsightClick(insight)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-black-lite text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h4>
                    <div className="flex items-center text-xs text-black-lite">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-black-lite mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'text-black-lite hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-black-lite'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-lite" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-black-lite">
                <span className="font-semibold">{filteredInsights.length}</span> insights found
                {selectedCategory !== 'all' && (
                  <span className="ml-2">
                    in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span>
                  </span>
                )}
              </div>
              <button className="flex items-center gap-2 text-black-lite hover:text-primary transition-colors">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Sort by Latest</span>
              </button>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInsights.map((insight) => (
                <article
                  key={insight.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100 hover:border-gold-light group cursor-pointer"
                  onClick={() => handleInsightClick(insight)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-black-lite mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h3>

                    <p className="text-black-lite mb-4 leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-black-lite mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-black-lite">
                        By {insight.author}
                      </span>
                      <button className="flex items-center text-primary hover:text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Insight Detail Component
const InsightDetail: React.FC<{ insight: any; onBack: () => void }> = ({ insight, onBack }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-primary hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Back to Insights
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              {insight.category}
            </span>
            <div className="flex items-center text-black-lite text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-black-lite text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{insight.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-black-lite mb-4 leading-tight">
            {insight.title}
          </h1>

          <p className="text-xl text-black-lite mb-6 leading-relaxed">
            {insight.excerpt}
          </p>

          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-semibold">
                  {insight.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-black-lite">{insight.author}</div>
                <div className="text-sm text-black-lite">Career Expert</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all ${
                  isBookmarked
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-black-lite hover:bg-slate-200'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-slate-100 text-black-lite hover:bg-slate-200 rounded-lg transition-all">
                <Share2 className="h-5 w-5" />
              </button>
              <div className="flex items-center text-black-lite text-sm">
                <Eye className="h-4 w-4 mr-1" />
                <span>1.2k views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-black-lite leading-relaxed space-y-6">
            <p>
              In today's rapidly evolving job market, staying ahead of the curve is more important than ever. 
              This comprehensive guide will walk you through the essential strategies and insights you need to 
              succeed in your career journey.
            </p>

            <h2 className="text-2xl font-bold text-black-lite mt-8 mb-4">Key Takeaways</h2>
            
            <ul className="list-disc list-inside space-y-2 text-black-lite">
              <li>Understanding current market trends and their impact on your career</li>
              <li>Developing skills that are in high demand across industries</li>
              <li>Building a professional network that opens doors to opportunities</li>
              <li>Crafting a personal brand that sets you apart from the competition</li>
            </ul>

            <h2 className="text-2xl font-bold text-black-lite mt-8 mb-4">The Changing Landscape</h2>
            
            <p>
              The professional landscape has undergone significant changes in recent years. Remote work, 
              digital transformation, and evolving skill requirements have reshaped how we approach career 
              development. Understanding these changes is crucial for anyone looking to advance their career.
            </p>

            <p>
              Companies are now looking for candidates who can adapt quickly, learn continuously, and 
              contribute to a collaborative work environment. This shift has created new opportunities 
              for professionals who are willing to embrace change and develop relevant skills.
            </p>

            <h2 className="text-2xl font-bold text-black-lite mt-8 mb-4">Actionable Steps</h2>
            
            <ol className="list-decimal list-inside space-y-2 text-black-lite">
              <li>Assess your current skills and identify areas for improvement</li>
              <li>Research industry trends and emerging technologies in your field</li>
              <li>Invest in continuous learning through courses, certifications, or workshops</li>
              <li>Build and maintain professional relationships through networking</li>
              <li>Create a strong online presence that showcases your expertise</li>
            </ol>

            <div className="bg-slate-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-black-lite mb-3">Pro Tip</h3>
              <p className="text-black-lite">
                Don't wait for the perfect opportunity to come to you. Be proactive in seeking out 
                new challenges and experiences that will help you grow professionally. The best time 
                to start building your career is now.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-black-lite mt-8 mb-4">Conclusion</h2>
            
            <p>
              Success in today's job market requires a combination of technical skills, soft skills, 
              and strategic thinking. By staying informed about industry trends, continuously developing 
              your abilities, and building meaningful professional relationships, you'll be well-positioned 
              to achieve your career goals.
            </p>

            <p>
              Remember, career development is a journey, not a destination. Stay curious, remain adaptable, 
              and never stop learning. Your future self will thank you for the investments you make in 
              your professional growth today.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-black-lite mb-6">Related Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <h4 className="font-bold text-black-lite mb-2 hover:text-primary transition-colors">
                  {relatedPost.title}
                </h4>
                <p className="text-black-lite text-sm mb-3 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center text-xs text-black-lite">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsListing;