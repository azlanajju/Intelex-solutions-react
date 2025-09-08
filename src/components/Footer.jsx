import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "Backend Development", "Cybersecurity"],
    Company: ["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"],
    Resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold gradient-text mb-4">Intelex Solutions</div>
              <p className="text-gray-600 mb-6 max-w-md">Your premium freelancing partner delivering cutting-edge digital solutions that transform businesses and drive real results.</p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail size={16} className="text-teal-400" />
                  <span>hello@intelexsolutions.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={16} className="text-teal-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={16} className="text-teal-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div key={category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <h3 className="text-lg font-semibold text-teal-400 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-12 pt-8 border-t border-gray-200">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for the latest updates, tips, and insights on digital transformation and technology trends.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900" />
              <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors duration-300">Subscribe</button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} Intelex Solutions. All rights reserved.</p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-300">
                <social.icon size={18} className="text-gray-700 hover:text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
