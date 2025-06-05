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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Services */}
      <Services />

      
      <About />
      <Features />

      {/* has feature page */}
      <Gallery />

      {/* Partner Page */}
      <Clients />

      {/* what people say about us */}
      <ProjectHighlight />

      {/* Article & Blogs */}
      <Blog />

      {/* Contact Page */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
