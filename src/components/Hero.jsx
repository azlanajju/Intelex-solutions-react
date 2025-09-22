import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { animateHeroText, createButtonAnimations, createFloatingAnimation, useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const featuresRef = useRef();
  const backgroundRef = useRef();
  const botImageRef = useRef();

  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleViewWork = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };

  // GSAP Animations
  useGSAP(() => {
    // Hero text animations with stagger
    const textElements = [titleRef.current?.querySelector("h1"), titleRef.current?.querySelector(".gradient-text"), subtitleRef.current].filter(Boolean);

    if (textElements.length > 0) {
      animateHeroText(textElements);
    }

    // Button animations
    const buttons = buttonsRef.current?.querySelectorAll("button");
    if (buttons && buttons.length > 0) {
      Array.from(buttons).forEach((button) => createButtonAnimations(button));
    }

    // Feature icons floating animation
    const featureIcons = featuresRef.current?.querySelectorAll(".feature-icon");
    if (featureIcons && featureIcons.length > 0) {
      createFloatingAnimation(Array.from(featureIcons), {
        duration: 4,
        y: 15,
        rotation: 3,
      });
    }

    // Background bubbles floating animation
    const bubbles = backgroundRef.current?.querySelectorAll(".floating-animation");
    if (bubbles && bubbles.length > 0) {
      createFloatingAnimation(Array.from(bubbles), {
        duration: 6,
        y: 30,
        rotation: 8,
      });
    }

    // Bot image entrance animation
    if (botImageRef.current) {
      gsap.fromTo(
        botImageRef.current,
        {
          opacity: 0,
          x: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen relative overflow-hidden flex items-center bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 opacity-50"></div>

      {/* Decorative background bubbles */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-animation"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl md:pr-12">
            <div ref={titleRef}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Transform Your
                <span className="gradient-text block">Digital Vision</span>
              </h1>
            </div>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-8">
              We're Intelex Solutions — your premium freelancing partner delivering cutting-edge web development, mobile apps, and digital solutions that drive real results.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleGetStarted} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold pulse-glow">
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={handleViewWork} variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold">
                View Our Work
              </Button>
            </div>

            {/* Feature Icons */}
            <div ref={featuresRef} className="flex mt-10 space-x-8 md:space-x-12">
              <div className="text-center">
                <div className="feature-icon w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Code className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Web Development</span>
              </div>
              <div className="text-center">
                <div className="feature-icon w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Smartphone className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Mobile Apps</span>
              </div>
              <div className="text-center">
                <div className="feature-icon w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 teal-glow">
                  <Globe className="text-white" size={24} />
                </div>
                <span className="text-sm text-gray-500">Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* Placeholder column on md+; image is positioned at section edge */}
          <div className="hidden md:block" />
        </div>
      </div>
      {/* Absolutely positioned image at bottom-right corner without gaps */}
      <img ref={botImageRef} src="/Images/HomeScreenBot.png" alt="Intelex Bot" className="pointer-events-none select-none absolute bottom-0 right-0 z-10 w-56 sm:w-72 md:w-[32rem] lg:w-[38rem]" />
    </section>
  );
};

export default Hero;
