import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { createScrollAnimations, useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Globe, Mail, MessageCircle, Search, Server, Settings, Smartphone, Users, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef();
  const headerRef = useRef();
  const servicesContainerRef = useRef();
  const horizontalScrollRef = useRef();

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  // GSAP Animations
  useGSAP(() => {
    // Header animation
    if (headerRef.current && headerRef.current.children) {
      createScrollAnimations({
        trigger: servicesRef.current,
        elements: Array.from(headerRef.current.children),
        animation: "fadeInUp",
        stagger: 0.2,
      });
    }

    // Services horizontal scroll animation
    if (servicesContainerRef.current) {
      const serviceCards = servicesContainerRef.current.querySelectorAll(".service-card");
      if (serviceCards.length > 0) {
        createScrollAnimations({
          trigger: servicesContainerRef.current,
          elements: Array.from(serviceCards),
          animation: "fadeInUp",
          stagger: 0.1,
        });
      }
    }
  }, []);

  // Horizontal scroll effect using direct GSAP (like in test page)
  useEffect(() => {
    if (!servicesContainerRef.current || !horizontalScrollRef.current) return;

    // Get the total width of the horizontal content
    const totalWidth = horizontalScrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // Calculate how much we need to scroll to show all cards
    const scrollDistance = totalWidth - viewportWidth;

    console.log('Services - Total width:', totalWidth);
    console.log('Services - Viewport width:', viewportWidth);
    console.log('Services - Scroll distance:', scrollDistance);

    // Create the horizontal scroll animation with proper pinning
    const horizontalScroll = gsap.to(horizontalScrollRef.current, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: servicesContainerRef.current,
        start: 'top top', // Start when top of trigger hits top of viewport
        end: `+=${scrollDistance}`, // End after scrolling through all cards
        pin: true, // Pin the trigger element to stop vertical scroll
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1, // Smooth pinning
        invalidateOnRefresh: true, // Refresh on window resize
        onUpdate: (self) => {
          console.log('Services - Progress:', self.progress);
        },
        onEnter: () => {
          console.log('Services - Horizontal scroll started - vertical scroll stopped');
        },
        onLeave: () => {
          console.log('Services - Horizontal scroll ended - vertical scroll resumed');
        },
        onRefresh: () => {
          console.log('Services - ScrollTrigger refreshed');
        },
      },
    });

    // Cleanup function
    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, high-performing websites tailored to your business goals using the latest technologies.",
      features: ["Custom Design", "Latest Technologies", "Business Goals Focus", "High Performance"],
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot Integration",
      description: "Engage visitors 24/7 with smart AI chatbots and WhatsApp support — generate more leads effortlessly.",
      features: ["24/7 Availability", "WhatsApp Support", "Lead Generation", "Smart AI Technology"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform Android & iOS apps designed for performance, usability, and scalability.",
      features: ["Cross-platform", "Android & iOS", "Performance Focus", "Scalability"],
    },
    {
      icon: Globe,
      title: "Domain & Hosting Setup",
      description: "Professional setup of secure domain, hosting, and SSL — everything to launch your website smoothly.",
      features: ["Secure Domain", "Professional Hosting", "SSL Certificate", "Smooth Launch"],
    },
    {
      icon: Search,
      title: "SEO & Speed Optimization",
      description: "Boost your website's visibility on search engines and load lightning-fast on every device.",
      features: ["Search Engine Visibility", "Lightning-fast Loading", "Multi-device Support", "Performance Boost"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Regular updates, bug fixes, backups, and technical assistance to keep your site running flawlessly.",
      features: ["Regular Updates", "Bug Fixes", "Backups", "Technical Support"],
    },
    {
      icon: Mail,
      title: "Safe Email",
      description: "Managed email service with hosting, spam protection, malware filtering, and comprehensive security for your business communications.",
      features: ["Email Configuration", "Microsoft 365 Integration", "24/7 Support", "Spam Protection"],
    },
    {
      icon: Server,
      title: "Domain & Hosting Services",
      description: "Reliable domain registration and high-performance hosting solutions for secure and scalable websites.",
      features: ["Domain Registration", "High-Performance Hosting", "SSL Certificates", "Scalable Solutions"],
    },
    {
      icon: Users,
      title: "SharePoint Intranet Portal",
      description: "Build customized intranet portals using SharePoint to streamline internal communication and collaboration.",
      features: ["Custom Portal Design", "Workflow Automation", "User Training", "Internal Communication"],
    },
    {
      icon: Settings,
      title: "IT Technical Support",
      description: "Comprehensive IT support to resolve issues quickly and maintain your systems' efficiency.",
      features: ["24/7 Technical Assistance", "System Monitoring", "Issue Resolution", "System Maintenance"],
    },
  ];

  return (
    <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer a comprehensive range of freelancing services designed to elevate your business and drive digital transformation.</p>
        </div>
      </div>

      {/* Horizontal Scrolling Services Container */}
      <div ref={servicesContainerRef} className="h-screen bg-gray-50 flex items-center" style={{ position: 'relative' }}>
        <div ref={horizontalScrollRef} className="flex items-center horizontal-scroll-container">
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <div className="service-card glass-effect rounded-2xl p-8 hover:teal-glow transition-all duration-300 group w-[400px] h-[400px]">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-teal-600">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button onClick={handleLearnMore} variant="outline" className="w-full border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
