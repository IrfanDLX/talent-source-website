import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'jobseekers' | 'employers' | 'technical';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I create an account on Talent Source?',
    answer: 'Creating an account is simple! Click the "Sign Up" button in the top right corner, fill in your basic information, and verify your email address. You can then complete your profile to start applying for jobs or posting positions.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Is Talent Source free to use for job seekers?',
    answer: 'Yes! Talent Source is completely free for job seekers. You can browse jobs, apply to positions, access career resources, and use our networking features at no cost.',
    category: 'jobseekers'
  },
  {
    id: '3',
    question: 'How do I apply for jobs on the platform?',
    answer: 'Once you find a job you\'re interested in, click "Apply Now" on the job listing. You can apply with your Talent Source profile or upload a custom resume and cover letter for that specific position.',
    category: 'jobseekers'
  },
  {
    id: '4',
    question: 'What are the pricing plans for employers?',
    answer: 'We offer flexible pricing plans for employers, including pay-per-post options and monthly subscriptions. Contact our sales team for detailed pricing information tailored to your hiring needs.',
    category: 'employers'
  },
  {
    id: '5',
    question: 'How do I post a job on Talent Source?',
    answer: 'After creating an employer account, click "Post a Job" from your dashboard. Fill in the job details, requirements, and company information. Your job will be reviewed and published within 24 hours.',
    category: 'employers'
  },
  {
    id: '6',
    question: 'Can I edit my profile after creating it?',
    answer: 'Absolutely! You can edit your profile at any time by going to your account settings. Keep your profile updated with new skills, experiences, and achievements to attract better opportunities.',
    category: 'jobseekers'
  },
  {
    id: '7',
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    category: 'technical'
  },
  {
    id: '8',
    question: 'What types of jobs are available on the platform?',
    answer: 'We feature opportunities across all industries including Technology, Healthcare, Finance, Marketing, Engineering, Education, and many more. From entry-level to executive positions, we have something for everyone.',
    category: 'general'
  },
  {
    id: '9',
    question: 'How can I contact customer support?',
    answer: 'You can reach our support team through multiple channels: email us at support@talentsource.com, call us at +1 (555) 123-4567, or use the live chat feature on our website. We\'re here to help!',
    category: 'technical'
  },
  {
    id: '10',
    question: 'Do you verify all job postings?',
    answer: 'Yes, we thoroughly review and verify all job postings before they go live. Our team checks for legitimacy, appropriate content, and compliance with our posting guidelines to ensure quality opportunities.',
    category: 'employers'
  }
];

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'general', name: 'General', icon: MessageCircle },
  { id: 'jobseekers', name: 'Job Seekers', icon: Phone },
  { id: 'employers', name: 'Employers', icon: Mail },
  { id: 'technical', name: 'Technical', icon: HelpCircle }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const openAll = () => {
    setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const closeAll = () => {
    setOpenItems(new Set());
  };

  return (
    <section className="py-12 bg-slate-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black-lite mb-2">
            Frequently Asked Questions
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Find answers to common questions about using Talent Source. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="lg:flex lg:gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-black-lite mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const count = category.id === 'all' 
                    ? faqData.length 
                    : faqData.filter(faq => faq.category === category.id).length;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-black-lite hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-4 w-4 ${
                          activeCategory === category.id ? 'text-white' : 'text-primary'
                        }`} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-black-lite group-hover:bg-slate-200'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-black-lite mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button
                    onClick={openAll}
                    className="w-full text-left px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={closeAll}
                    className="w-full text-left px-3 py-2 text-sm text-black-lite hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-gold-light group overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                  >
                    <h3 className="ts-text-h3 font-bold text-black-lite group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.has(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-black-lite group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4 border-t border-slate-100">
                      <p className="ts-p-text text-black-lite leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black-lite mb-2">
                  No questions found
                </h3>
                <p className="text-black-lite">
                  Try selecting a different category or contact our support team.
                </p>
              </div>
            )}

            {/* Contact Support Card */}
            <div className="mt-12 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 rounded-xl p-8 text-center text-white">
              <div className="max-w-2xl mx-auto">
                <HelpCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Our friendly support team is here to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Support
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-black-lite px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;