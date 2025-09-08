import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center" aria-label="Intelex Solutions Home">
            <img src="/Images/logos/logo_white_full.png" alt="Intelex Solutions" className="h-8  w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a key={item.name} href={item.href} whileHover={{ scale: 1.1 }} className="text-gray-900 hover:text-teal-600 transition-colors duration-300">
                {item.name}
              </motion.a>
            ))}
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 glass-effect rounded-lg p-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-gray-900 hover:text-teal-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white">Get Started</Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
