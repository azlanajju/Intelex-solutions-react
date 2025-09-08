import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen bg-white text-black scroll-smooth">
      <Helmet>
        <title>Intelex Solutions - Premium Freelancing Services</title>
        <meta name="description" content="Intelex Solutions offers premium freelancing services including web development, mobile apps, and digital solutions. Transform your business with our expert team." />
        <meta property="og:title" content="Intelex Solutions - Premium Freelancing Services" />
        <meta property="og:description" content="Transform your business with our expert freelancing services. Web development, mobile apps, and digital solutions that drive results." />
      </Helmet>

      <CustomCursor />

      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
