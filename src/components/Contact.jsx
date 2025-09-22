import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };
    submissions.push(newSubmission);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });

    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out. We'll get back to you within 24 hours!",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@intelexsolutions.in",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9972826383",
      description: "Primary contact number",
    },
    {
      icon: Phone,
      title: "Alternative Numbers",
      content: "+91 6361557581, +91 8867575821",
      description: "Additional contact numbers",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "India",
      description: "Come say hello at our office",
    },
  ];

  const services = ["Website Development", "AI Chatbot Integration", "Mobile App Development", "Domain & Hosting Setup", "SEO & Speed Optimization", "Maintenance & Support", "Other"];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to transform your digital presence? Let's discuss your project and see how we can help you achieve your goals.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-teal-600">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900" placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900">
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Project Details *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-gray-900 resize-none" placeholder="Tell us about your project, timeline, and requirements..."></textarea>
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold pulse-glow">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-teal-600 font-medium">{info.content}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Why Choose Intelex?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-teal-500" size={20} />
                  <span className="text-gray-600">24-hour response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-teal-500" size={20} />
                  <span className="text-gray-600">Free consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Send className="text-teal-500" size={20} />
                  <span className="text-gray-600">Detailed project proposal</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4 gradient-text">Ready to Start?</h3>
              <p className="text-gray-600 mb-4">Get a free consultation and project estimate within 24 hours.</p>
              <div className="text-3xl font-bold text-teal-600">100% Free</div>
              <div className="text-gray-500">No obligations</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
