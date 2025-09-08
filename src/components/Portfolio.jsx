import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const handleViewProject = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      image: 'Modern e-commerce website interface with shopping cart and product listings',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'A comprehensive healthcare app connecting patients with doctors, featuring appointment booking and telemedicine capabilities.',
      image: 'Healthcare mobile app interface showing doctor consultation and appointment booking',
      tech: ['React Native', 'Firebase', 'WebRTC', 'Redux']
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'An advanced financial dashboard with real-time data visualization, portfolio tracking, and investment analytics.',
      image: 'Financial dashboard with charts, graphs and investment portfolio data',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Restaurant Management System',
      category: 'Full Stack',
      description: 'Complete restaurant management solution with POS system, inventory management, and customer relationship features.',
      image: 'Restaurant management system interface with order tracking and inventory',
      tech: ['Angular', 'Express.js', 'MySQL', 'Socket.io']
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'A modern social media platform with real-time messaging, content sharing, and advanced privacy controls.',
      image: 'Social media platform interface with posts, messaging and user profiles',
      tech: ['Next.js', 'GraphQL', 'Redis', 'AWS']
    },
    {
      title: 'Learning Management System',
      category: 'Education Tech',
      description: 'Comprehensive LMS with course creation, student tracking, assessments, and interactive learning modules.',
      image: 'Learning management system with course dashboard and student progress tracking',
      tech: ['React', 'Django', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:teal-glow transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img  
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    onClick={handleViewProject}
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                  <Button
                    onClick={handleViewProject}
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-teal-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-600 bg-opacity-20 text-teal-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={handleViewProject}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;