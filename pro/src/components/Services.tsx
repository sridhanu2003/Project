import React from "react";
import { motion, Variants } from "framer-motion";

/* Import your images */
import Acpun from "../assets/Acpun.jpg";
import Holis from "../assets/Holis.jpg";
import Pain from "../assets/pain.jpg";
import Natural from "../assets/natural.jpeg";

const Services: React.FC = () => {
  const services = [
    {
      image: Acpun,
      title: "Acupuncture Therapy",
      description:
        "Traditional Chinese medicine technique that stimulates specific points to promote healing and pain relief.",
      color: "from-rose-500 to-pink-500",
    },
    {
      image: Holis,
      title: "Holistic Wellness",
      description:
        "Comprehensive approach addressing mind, body, and spirit for complete health transformation.",
      color: "from-pink-500 to-rose-500",
    },
    {
      image: Pain,
      title: "Pain Management",
      description:
        "Effective non-invasive treatments for chronic pain, migraines, and musculoskeletal conditions.",
      color: "from-rose-600 to-pink-600",
    },
    {
      image: Natural,
      title: "Natural Healing",
      description:
        "Herbal medicine and natural therapies to support your body's innate healing abilities.",
      color: "from-pink-600 to-rose-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#f5f3ff] via-[#ffffff] to-[#fde2ff]"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our range of holistic treatments designed to restore
            balance and promote wellness
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image */}
              <div
                className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg overflow-hidden`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="mb-8 opacity-90">
              Schedule a consultation with our expert practitioners today
            </p>

            <motion.button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book an Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;