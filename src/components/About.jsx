import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Happy Clients' },
    { icon: Award, number: '200+', label: 'Projects Completed' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '98%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Intelex Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of freelance experts dedicated to transforming your digital presence with innovative solutions and exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-teal-400">Our Mission</h3>
            <p className="text-lg text-gray-300 mb-6">
              At Intelex Solutions, we believe every business deserves a powerful digital presence. Our mission is to deliver premium freelancing services that not only meet but exceed your expectations.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We combine cutting-edge technology with creative design to build solutions that drive growth, enhance user experience, and deliver measurable results for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-teal-600 rounded-full text-sm font-semibold">Innovation</span>
              <span className="px-4 py-2 bg-teal-600 rounded-full text-sm font-semibold">Quality</span>
              <span className="px-4 py-2 bg-teal-600 rounded-full text-sm font-semibold">Results</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 teal-glow">
              <img  alt="Professional team working on digital solutions" className="w-full h-64 object-cover rounded-lg mb-6" src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d" />
              <h4 className="text-xl font-bold mb-4 text-teal-400">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Expert team with proven track record
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Competitive pricing and fast delivery
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-effect rounded-xl p-6 hover:teal-glow transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;