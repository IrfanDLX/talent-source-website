import React, { useState } from 'react';
import { Check, X, Play, ArrowRight, Shield, Star, Users, TrendingUp, Zap, ChevronDown } from 'lucide-react';

interface SalePageProps {
  onSelectPlan: (plan: 'basic' | 'gold') => void;
}

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 29,
    period: 'month',
    description: 'Perfect for individuals starting their job search journey',
    popular: false,
    features: [
      { name: 'Access to 1,000+ job listings', included: true },
      { name: 'Basic profile creation', included: true },
      { name: 'Email job alerts', included: true },
      { name: 'Resume builder (1 template)', included: true },
      { name: 'Apply to 10 jobs per day', included: true },
      { name: 'Priority support', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Featured profile', included: false },
      { name: 'Unlimited job applications', included: false },
      { name: 'Personal career coach', included: false }
    ],
    buttonText: 'Get Started',
    color: 'slate'
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    price: 79,
    period: 'month',
    description: 'For serious professionals ready to accelerate their career',
    popular: true,
    features: [
      { name: 'Access to 10,000+ premium job listings', included: true },
      { name: 'Advanced profile with portfolio', included: true },
      { name: 'Real-time job alerts (SMS + Email)', included: true },
      { name: 'Resume builder (20+ templates)', included: true },
      { name: 'Unlimited job applications', included: true },
      { name: 'Priority 24/7 support', included: true },
      { name: 'Advanced analytics & insights', included: true },
      { name: 'Featured profile (3x visibility)', included: true },
      { name: 'Personal career coach (2 sessions/month)', included: true },
      { name: 'Direct employer messaging', included: true }
    ],
    buttonText: 'Go Premium',
    color: 'amber'
  }
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a 7-day free trial for the Gold Plan so you can experience all premium features before committing.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with our service, contact us for a full refund.'
  },
  {
    question: 'What happens when I upgrade from Basic to Gold?',
    answer: 'You will get immediate access to all Gold features, and we will prorate the remaining time on your Basic plan.'
  }
];

const SalePage: React.FC<SalePageProps> = ({ onSelectPlan }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Video Banner Section */}
      <section className="relative h-[600px] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/95 z-10"></div>

        {/* Video Background Placeholder */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Career Success"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Your Career Journey
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who landed their dream jobs with our premium platform
            </p>

            {!isVideoPlaying && (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                <Play className="h-6 w-6 fill-current" />
                Watch Success Stories
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15K+</div>
              <div className="text-slate-600">Jobs Filled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-slate-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to find your dream job and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Matches</h3>
              <p className="text-slate-600 leading-relaxed">
                Our AI-powered algorithm matches you with the most relevant job opportunities in real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Companies</h3>
              <p className="text-slate-600 leading-relaxed">
                All employers are thoroughly vetted to ensure you are applying to legitimate opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Career Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Access exclusive resources, coaching, and insights to accelerate your professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "This platform changed my career trajectory. Within 2 weeks, I landed 3 interviews and got my dream job!"
              </p>
              <div className="font-semibold text-slate-900">Sarah Johnson</div>
              <div className="text-sm text-slate-600">Software Engineer at Google</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "The Gold plan is worth every penny. The career coach helped me negotiate a 40% salary increase!"
              </p>
              <div className="font-semibold text-slate-900">Michael Chen</div>
              <div className="text-sm text-slate-600">Product Manager at Amazon</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Best investment in my career. The resume builder and profile visibility made all the difference."
              </p>
              <div className="font-semibold text-slate-900">Emily Rodriguez</div>
              <div className="text-sm text-slate-600">Marketing Director at Meta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Select the plan that best fits your career goals and start your journey today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? 'border-amber-500 scale-105'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                      <span className="text-slate-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.id as 'basic' | 'gold')}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our plans and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-600 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of professionals who have already taken the next step
          </p>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all shadow-lg inline-flex items-center"
          >
            View Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SalePage;
