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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RecentJobs />
        <JobListings />
        <MissionStatement />
        <WhyChooseUs />
        <Testimonials />
        <TrustedCompanies />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;