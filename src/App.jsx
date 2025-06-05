import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import ProjectHighlight from './components/ProjectHighlight';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTION_COMPONENTS = {
  Home: (
    <>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Clients />
      <ProjectHighlight />
    </>
  ),
  Services: <Services />, // You can add more related sections if needed
  Projects: <Clients />, // Show Clients component for Projects link
  Blog: <Blog />,
  Contacts: <Contact />,
};

function App() {
  const [section, setSection] = useState('Home');

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section]);

  return (
    <div className="overflow-x-hidden w-full">
      <Navbar onNavigate={setSection} activeSection={section} />
      <div className="pt-20">
        {SECTION_COMPONENTS[section] || SECTION_COMPONENTS['Home']}
      </div>
      <Footer />
    </div>
  );
}

export default App;
