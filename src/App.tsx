import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentJobs from './components/RecentJobs';
import JobListings from './components/JobListings';
import MissionStatement from './components/MissionStatement';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import TrustedCompanies from './components/TrustedCompanies';
import InsightsListing from './components/InsightsListing';
import FAQ from './components/FAQ';
import SalePage from './components/SalePage';
import PaymentPage from './components/PaymentPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedPlan, setSelectedPlan] = React.useState<'basic' | 'gold'>('basic');

  const handleSelectPlan = (plan: 'basic' | 'gold') => {
    setSelectedPlan(plan);
    setCurrentPage('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentPage('thankyou');
  };

  const handleGoHome = () => {
    setCurrentPage('home');
  };

  const handleBackToSale = () => {
    setCurrentPage('sale');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'insights':
        return <InsightsListing />;
      case 'sale':
        return <SalePage onSelectPlan={handleSelectPlan} />;
      case 'payment':
        return (
          <PaymentPage
            selectedPlan={selectedPlan}
            onBack={handleBackToSale}
            onPaymentComplete={handlePaymentComplete}
          />
        );
      case 'thankyou':
        return <ThankYouPage selectedPlan={selectedPlan} onGoHome={handleGoHome} />;
      default:
        return (
          <>
            <Hero />
            <RecentJobs />
            <JobListings />
            <MissionStatement />
            <WhyChooseUs />
            <Testimonials />
            <TrustedCompanies />
            <FAQ />
            <Partners />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;