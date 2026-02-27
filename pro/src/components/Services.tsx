import React from "react";
import { motion, Variants } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      image: "/Acpun.jpg",
      title: "அக்யுபங்சர் சிகிச்சை",
      description:
        "பாரம்பரிய சீன மருத்துவ முறையாகும். உடலில் குறிப்பிட்ட புள்ளிகளை தூண்டி வலி குறைப்பு மற்றும் குணமடைவதை மேம்படுத்துகிறது.",
      color: "from-rose-500 to-pink-500",
    },
    {
      image: "/hols.jpg",
      title: "முழுமையான நலன்",
      description:
        "மனம், உடல் மற்றும் ஆன்மாவை ஒருங்கிணைத்து முழுமையான ஆரோக்கிய மாற்றத்தை உருவாக்கும் அணுகுமுறை.",
      color: "from-pink-500 to-rose-500",
    },
    {
      image: "/pain.jpg",
      title: "வலி மேலாண்மை",
      description:
        "நீண்டநாள் வலி, மைக்ரேன் மற்றும் தசை சம்பந்தப்பட்ட பிரச்சினைகளுக்கு பாதுகாப்பான சிகிச்சைகள்.",
      color: "from-rose-600 to-pink-600",
    },
    {
      image: "/natural.jpeg",
      title: "இயற்கை சிகிச்சை",
      description:
        "மூலிகை மருந்துகள் மற்றும் இயற்கை சிகிச்சைகள் மூலம் உடலின் இயல்பான குணமடைதலை ஆதரிக்கிறது.",
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
            எங்கள்{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              சேவைகள்
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            உங்கள் உடல் மற்றும் மன நலனை மேம்படுத்தும் முழுமையான சிகிச்சைகளை கண்டறியுங்கள்
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
              உங்கள் குணமடைவு பயணத்தை தொடங்க தயாரா?
            </h3>
            <p className="mb-8 opacity-90">
              இன்று எங்கள் நிபுணர்களுடன் ஆலோசனைக்கு நேரம் பதிவு செய்யுங்கள்
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
              நேரம் பதிவு செய்யுங்கள்
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;