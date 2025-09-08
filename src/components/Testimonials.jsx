import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Intelex Solutions transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 300%. Absolutely phenomenal work!",
      rating: 5,
      image: "Professional businesswoman CEO in modern office setting",
    },
    {
      name: "Michael Chen",
      position: "Founder, GreenEco Solutions",
      content: "Working with Intelex was a game-changer for our startup. They built our mobile app from scratch and it now has over 50k downloads. Their expertise is unmatched.",
      rating: 5,
      image: "Young entrepreneur founder in casual business attire",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Fashion Forward",
      content: "The e-commerce platform they developed for us is incredible. Sales have tripled since launch, and our customers love the seamless shopping experience.",
      rating: 5,
      image: "Marketing director in creative workspace with fashion elements",
    },
    {
      name: "David Thompson",
      position: "CTO, FinanceFlow",
      content: "Intelex Solutions delivered our complex financial dashboard ahead of schedule. Their attention to detail and technical expertise exceeded all our expectations.",
      rating: 5,
      image: "Technology executive CTO in modern tech office environment",
    },
    {
      name: "Lisa Wang",
      position: "Owner, Wellness Studio",
      content: "They created a beautiful booking system for our wellness studio. Our clients love how easy it is to schedule appointments, and we've seen a 40% increase in bookings.",
      rating: 5,
      image: "Wellness studio owner in peaceful spa environment",
    },
    {
      name: "Robert Martinez",
      position: "Director, EduTech Solutions",
      content: "The learning management system they built revolutionized our online education platform. Student engagement is up 250% and teachers love the intuitive interface.",
      rating: 5,
      image: "Education technology director in modern classroom setting",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied clients have to say about working with Intelex Solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8 hover:teal-glow transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 text-teal-400 opacity-20" size={32} />

              <div className="flex items-center mb-6">
                <img alt={`${testimonial.name} testimonial photo`} className="w-16 h-16 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-teal-400 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-gray-300 mb-6">Let's discuss how we can help transform your business with our premium freelancing services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">150+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">5★</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
