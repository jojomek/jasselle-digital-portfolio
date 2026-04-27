import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import TopVideos from "@/components/portfolio/TopVideos";
import DriveCTA from "@/components/portfolio/DriveCTA";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TopVideos />
      <DriveCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
