import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sameer",
      position: "GDEduTech",
      content: "Professional, reliable, and incredibly knowledgeable—our e-learning platform now runs smoother than ever thanks to their expertise",
      rating: 5,
      image: "Professional client testimonial photo",
    },
    {
      name: "Abdul Basith",
      position: "GD Gold and Diamonds",
      content: "The e-commerce features and design were beyond our expectations. Secure, elegant, and easy to manage.",
      rating: 5,
      image: "Professional client testimonial photo",
    },
    {
      name: "Abubakar Aidarus",
      position: "Marasi Alimdad",
      content: "They helped us set up Microsoft 365 and streamline our internal workflows—game changer for productivity!",
      rating: 5,
      image: "Professional client testimonial photo",
    },
    {
      name: "Ajwad Ahmed",
      position: "Orbitus Shipping",
      content: "Our website now perfectly reflects our global logistics capabilities. Clean design, fast loading, and mobile-friendly—exactly what we needed!",
      rating: 5,
      image: "Professional client testimonial photo",
    },
    {
      name: "Junaid",
      position: "MHS GPR",
      content: "They understood our vision from day one and delivered a professional website that's both functional and visually appealing.",
      rating: 5,
      image: "Professional client testimonial photo",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied clients have to say about working with Intelex Solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8 hover:teal-glow transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 text-teal-500 opacity-20" size={32} />

              <div className="flex items-center mb-6">
                <img alt={`${testimonial.name} testimonial photo`} className="w-16 h-16 rounded-full object-cover mr-4" src="/Images/userIcon.png" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-teal-600 text-sm">{testimonial.position}</p>
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
            <p className="text-xl text-gray-600 mb-6">Let's discuss how we can help transform your business with our premium freelancing services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
