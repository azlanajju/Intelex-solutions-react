import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { createScrollAnimations, useGSAP } from "@/hooks/useGSAP";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const Portfolio = () => {
  const portfolioRef = useRef();
  const headerRef = useRef();
  const projectsRef = useRef();

  const handleViewProject = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    }
  };

  // GSAP Animations
  useGSAP(() => {
    // Header animation
    if (headerRef.current && headerRef.current.children) {
      createScrollAnimations({
        trigger: portfolioRef.current,
        elements: Array.from(headerRef.current.children),
        animation: "fadeInUp",
        stagger: 0.2,
      });
    }

    // Projects animation
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll(".project-card");
      if (projectCards.length > 0) {
        createScrollAnimations({
          trigger: projectsRef.current,
          elements: Array.from(projectCards),
          animation: "fadeInUp",
          stagger: 0.15,
        });
      }
    }
  }, []);

  const projects = [
    {
      title: "PACE Conclave",
      category: "Educational Platform",
      description: "PACE Conclave is an initiative by P.A College of Engineering, aiming to bring together academia, industry, and research personnel through a series of events.",
      image: "/Images/paceconclave.png",
      tech: ["Web Development", "Event Management", "Academic Platform", "Responsive Design"],
      url: "#",
      status: "Live",
    },
    {
      title: "GD Edu Tech",
      category: "E-Learning Platform",
      description: "Access world-class education from anywhere. Learn at your own pace with expert-led courses designed for modern learners.",
      image: "/Images/gdedutech.png",
      tech: ["E-Learning", "Course Management", "User Dashboard", "Progress Tracking"],
      url: "#",
      status: "Live",
    },
    {
      title: "GD Gold and Diamonds",
      category: "E-Commerce Platform",
      description: "At GD GOLD AND DIAMONDS, we're dedicated to providing a trusted, high-quality experience for our clients. With ethically sourced, rigorously inspected gold.",
      image: "/Images/gdgoldanddiamonds.png",
      tech: ["E-Commerce", "Secure Payments", "Product Catalog", "Customer Management"],
      url: "#",
      status: "Live",
    },
    {
      title: "Wafa Enterprises",
      category: "Financial Services Platform",
      description: "Experience a smarter way to save with us. Trusted by over 30,000 customers, your monthly contributions do more than build financial security.",
      image: "/Images/wafaeneterprises.png",
      tech: ["Financial Services", "User Management", "Payment Processing", "Dashboard Analytics"],
      url: "#",
      status: "Live",
    },
    {
      title: "Kampus Flow",
      category: "School Management Platform",
      description: "Run your campus with clarity from day one. A fresh platform designed to cut admin work, improve communication, and showcase learning. Features smart attendance, connected messaging, and learning portfolios.",
      image: "/Images/kampusflow.png",
      tech: ["Smart Attendance", "Connected Messaging", "Learning Portfolios", "Flexible Fees"],
      url: "https://kampusflow.intelexsolutions.in/",
      status: "Early Access Beta",
    },
    {
      title: "WWAPI.space",
      category: "WhatsApp API Provider",
      description: "A powerful WhatsApp API platform providing developers and businesses with reliable messaging infrastructure. Send messages, manage conversations, and integrate WhatsApp into your applications seamlessly.",
      image: "/Images/wwapi.png",
      tech: ["WhatsApp API", "Message Automation", "Business Integration", "Cloud Infrastructure"],
      url: "https://wwapi.space/",
      status: "Live",
    },
  ];

  return (
    <section ref={portfolioRef} id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.</p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-effect rounded-2xl overflow-hidden hover:teal-glow transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img alt={`${project.title} project screenshot`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" src={project.image} />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button onClick={() => handleViewProject(project.url)} size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <ExternalLink size={16} className="mr-2" />
                    View Live
                  </Button>
                  <Button onClick={() => handleViewProject()} size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-teal-500">{project.category}</div>
                  {project.status && <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === "Live" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{project.status}</span>}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mt-12">
          <Button onClick={() => handleViewProject()} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
