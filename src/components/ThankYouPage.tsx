import React from 'react';
import { CheckCircle, Mail, Calendar, Download, ArrowRight, Home } from 'lucide-react';

interface ThankYouPageProps {
  selectedPlan: 'basic' | 'gold';
  onGoHome: () => void;
}

const planDetails = {
  basic: {
    name: 'Basic Plan',
    price: 29
  },
  gold: {
    name: 'Gold Plan',
    price: 79
  }
};

const ThankYouPage: React.FC<ThankYouPageProps> = ({ selectedPlan, onGoHome }) => {
  const plan = planDetails[selectedPlan];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Icon and Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-slate-600">
            Welcome to your new career journey with the {plan.name}
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="border-b border-slate-200 pb-6 mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Order Confirmation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Order Number</p>
                <p className="font-semibold text-slate-900">#ORD-{Math.floor(Math.random() * 100000)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Plan</p>
                <p className="font-semibold text-slate-900">{plan.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Amount Paid</p>
                <p className="font-semibold text-slate-900">${plan.price}.00</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Date</p>
                <p className="font-semibold text-slate-900">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Confirmation Email Sent</h3>
                <p className="text-sm text-slate-600">
                  We've sent a confirmation email with your receipt and account details. Please check your inbox.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-6">
              <Calendar className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Next Billing Date</h3>
              <p className="text-sm text-slate-600">
                {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <Download className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Download Receipt</h3>
              <button className="text-sm text-primary hover:text-primary-700 font-medium">
                Download PDF Receipt
              </button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Complete Your Profile</h3>
                <p className="text-slate-600">
                  Add your work experience, skills, and preferences to get better job matches.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Build Your Resume</h3>
                <p className="text-slate-600">
                  Use our professional templates to create a standout resume that gets noticed.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Start Applying</h3>
                <p className="text-slate-600">
                  Browse thousands of job listings and start applying to positions that match your skills.
                </p>
              </div>
            </div>

            {selectedPlan === 'gold' && (
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Schedule Your Coaching Session</h3>
                  <p className="text-slate-600">
                    Book your first session with a personal career coach to accelerate your job search.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGoHome}
            className="bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Dashboard
          </button>
          <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all inline-flex items-center justify-center">
            Browse Jobs
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-2">Need help getting started?</p>
          <a href="#" className="text-primary hover:text-primary-700 font-semibold">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
