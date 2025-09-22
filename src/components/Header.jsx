import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 50px for background effect
      setIsScrolled(currentScrollY > 50);

      // Check scroll direction for hide/show behavior
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolledUp(false); // Scrolling down - hide nav
      } else {
        setIsScrolledUp(true); // Scrolling up - show nav
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: isScrolledUp ? 0 : -100 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center" aria-label="Intelex Solutions Home">
            <img src="/Images/logos/logo_white_full.png" alt="Intelex Solutions" className="h-8 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a key={item.name} href={item.href} whileHover={{ scale: 1.1 }} className="text-black hover:text-teal-600 transition-all duration-300">
                {item.name}
              </motion.a>
            ))}
            <Button onClick={() => window.open("tel:+1234567890", "_self")} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black transition-colors duration-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 glass-effect rounded-lg p-4 backdrop-blur-md">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-black hover:text-teal-600 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <Button onClick={() => window.open("tel:+1234567890", "_self")} className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300">
              Get Started
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
