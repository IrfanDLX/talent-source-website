import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentJobs from './components/RecentJobs';
import JobsBySource from './components/JobsBySource';
import FeaturedCategories from './components/FeaturedCategories';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RecentJobs />
        <JobsBySource />
        {/* <FeaturedCategories /> */}
        <HowItWorks />
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
        <SuccessStories />
        <Partners />
        {/* <Blog /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;