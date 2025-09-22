import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";
import { useGSAPInit } from "@/hooks/useGSAPInit";
import { useEffect } from "react";

function App() {
  // Initialize GSAP
  useGSAPInit();

  // Set document title and meta tags
  useEffect(() => {
    document.title = "Intelex Solutions - Premium Freelancing Services";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Intelex Solutions offers premium freelancing services including web development, mobile apps, and digital solutions. Transform your business with our expert team.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Intelex Solutions offers premium freelancing services including web development, mobile apps, and digital solutions. Transform your business with our expert team.";
      document.head.appendChild(meta);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Intelex Solutions - Premium Freelancing Services");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Intelex Solutions - Premium Freelancing Services";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Transform your business with our expert freelancing services. Web development, mobile apps, and digital solutions that drive results.");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = "Transform your business with our expert freelancing services. Web development, mobile apps, and digital solutions that drive results.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black scroll-smooth">
      <CustomCursor />

      <Header />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
