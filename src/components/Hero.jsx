import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react";

const Hero = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleViewWork = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Decorative background bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl md:pr-12">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transform Your
              <span className="gradient-text block">Digital Vision</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-600 mb-8">
              We're Intelex Solutions — your premium freelancing partner delivering cutting-edge web development, mobile apps, and digital solutions that drive real results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleGetStarted} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold pulse-glow">
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={handleViewWork} variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold">
                View Our Work
              </Button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex mt-10 space-x-8 md:space-x-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Code className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Web Development</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Smartphone className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Mobile Apps</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Globe className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Digital Solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Placeholder column on md+; image is positioned at section edge */}
          <div className="hidden md:block" />
        </div>
      </div>
      {/* Absolutely positioned image at bottom-right corner without gaps */}
      <img src="/Images/HomeScreenBot.png" alt="Intelex Bot" className="pointer-events-none select-none absolute bottom-0 right-0 z-10 w-56 sm:w-72 md:w-[32rem] lg:w-[38rem]" />
    </section>
  );
};

export default Hero;
