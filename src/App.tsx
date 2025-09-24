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

function App() {
  // Simple routing state - in a real app, you'd use React Router
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'insights':
        return <InsightsListing />;
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