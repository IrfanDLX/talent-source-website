import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Clock, MessageSquare } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="ts-text-h2 font-bold text-black-lite mb-4">
            Get in Touch with Us
          </h2>
          <p className="ts-p-text text-black-lite max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Need help finding the perfect job opportunity? 
            Our dedicated team is here to support you every step of the way. Reach out to us 
            and let's start a conversation about your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black-lite mb-6">
                Contact Information
              </h3>
              <p className="text-black-lite mb-8 leading-relaxed">
                We're committed to providing exceptional service and support. Whether you're a job seeker 
                looking for your next opportunity or an employer seeking top talent, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black-lite mb-2">Email Us</h4>
                    <p className="text-black-lite mb-1">support@talentsource.com</p>
                    <p className="text-black-lite mb-1">careers@talentsource.com</p>
                    <p className="text-black-lite">partnerships@talentsource.com</p>
                    <p className="text-sm text-black-lite mt-2">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black-lite mb-2">Call Us</h4>
                    <p className="text-black-lite mb-1">+1 (555) 123-4567</p>
                    <p className="text-black-lite mb-1">+1 (555) 987-6543</p>
                    <p className="text-sm text-black-lite mt-2">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black-lite mb-2">Visit Our Office</h4>
                    <p className="text-black-lite mb-1">123 Business Avenue, Suite 500</p>
                    <p className="text-black-lite mb-1">San Francisco, CA 94105</p>
                    <p className="text-black-lite">United States</p>
                    <p className="text-sm text-black-lite mt-2">Open for scheduled appointments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="text-lg font-semibold text-black-lite mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Business Hours
              </h4>
              <div className="space-y-3 text-black-lite">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                  <p className="text-sm text-black-lite">
                    <strong>Emergency Support:</strong> Available 24/7 for urgent matters
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h4 className="text-lg font-semibold text-black-lite mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Follow Us
              </h4>
              <p className="text-black-lite mb-4">
                Stay connected and get the latest updates on job opportunities and career tips.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-primary hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-primary hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-primary hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-primary hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-black-lite mb-6">
              Send us a Message
            </h3>
            <p className="text-black-lite mb-6">
              Fill out the form below and we'll get back to you as soon as possible. 
              All fields are required to ensure we can provide you with the best assistance.
            </p>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black-lite mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black-lite mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-black-lite mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black-lite mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-700 disabled:bg-slate-400 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-black-lite text-center">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-black-lite mb-2">Quick Response</h4>
            <p className="text-black-lite text-sm">
              We respond to all inquiries within 24 hours during business days.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-black-lite mb-2">Expert Support</h4>
            <p className="text-black-lite text-sm">
              Our experienced team provides personalized assistance for all your needs.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-black-lite mb-2">Global Reach</h4>
            <p className="text-black-lite text-sm">
              Serving clients worldwide with local expertise and global opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;