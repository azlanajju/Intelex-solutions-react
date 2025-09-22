import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Technologies = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const technologies = [
    { name: "React", icon: "⚛️", description: "Frontend Framework" },
    { name: "Flutter", icon: "📱", description: "Mobile Development" },
    { name: "Node.js", icon: "🟢", description: "Backend Runtime" },
    { name: "Python", icon: "🐍", description: "Backend Development" },
    { name: "JavaScript", icon: "🟨", description: "Programming Language" },
    { name: "TypeScript", icon: "🔷", description: "Typed JavaScript" },
    { name: "MongoDB", icon: "🍃", description: "Database" },
    { name: "PostgreSQL", icon: "🐘", description: "Relational Database" },
    { name: "AWS", icon: "☁️", description: "Cloud Services" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "Git", icon: "📋", description: "Version Control" },
    { name: "Figma", icon: "🎨", description: "Design Tool" },
    { name: "VS Code", icon: "💻", description: "Code Editor" },
    { name: "Firebase", icon: "🔥", description: "Backend Services" },
    { name: "Next.js", icon: "▲", description: "React Framework" },
    { name: "Vue.js", icon: "💚", description: "Frontend Framework" },
    { name: "Angular", icon: "🅰️", description: "Frontend Framework" },
    { name: "Express", icon: "🚀", description: "Web Framework" },
    { name: "GraphQL", icon: "🔺", description: "Query Language" },
    { name: "Redis", icon: "🔴", description: "In-Memory Database" },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = 200; // Scroll by 200px each time
          const maxScroll = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScroll - scrollAmount) {
            // Reset to beginning when reaching the end
            container.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            // Continue scrolling
            container.scrollTo({
              left: container.scrollLeft + scrollAmount,
              behavior: "smooth",
            });
          }
        }
      }, 2000); // Scroll every 2 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We leverage cutting-edge technologies and tools to deliver exceptional digital solutions</p>
        </motion.div>

        <div className="relative">
          {/* Technologies Container */}
          <div ref={scrollContainerRef} className="flex gap-8 overflow-x-hidden pb-4 scrollbar-hide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Duplicate the technologies array for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div key={`${tech.name}-${index}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: (index % technologies.length) * 0.1 }} viewport={{ once: true }} className="flex-shrink-0 group">
                <div className="glass-effect rounded-2xl p-6 hover:teal-glow transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-500">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
