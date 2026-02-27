import React from "react";
import { motion, Variants } from "framer-motion";

const Gallery: React.FC = () => {
  const images = [
    {
      url: "/Acpun.jpg",
      title: "அக்யுபங்சர் சிகிச்சை",
      description: "பாரம்பரிய அக்யுபங்சர் சிகிச்சை முறைகள்",
    },
    {
      url: "/well.jpg",
      title: "நல அமர்வு",
      description: "முழுமையான நல மற்றும் சிகிச்சை சூழல்",
    },
    {
      url: "/herbal.jpg",
      title: "மூலிகை மருத்துவம்",
      description: "இயற்கையான சிகிச்சை தீர்வுகள்",
    },
    {
      url: "/relif.jpg",
      title: "வலி மேலாண்மை",
      description: "வலியை குறைக்கும் சிறந்த முறைகள்",
    },
    {
      url: "/relaxation.jpg",
      title: "இளைப்பாறும் சிகிச்சை",
      description: "மனஅழுத்த நிவாரணம் மற்றும் இளைப்பாறுதல்",
    },
    {
      url: "/hols.jpg",
      title: "முழுமையான பராமரிப்பு",
      description: "மனம், உடல், ஆன்மா ஆகியவற்றை இணைக்கும் நல அணுகுமுறை",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            எங்கள்{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              காட்சியகம்
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            எங்கள் அமைதியான சூழலை காணவும் மற்றும் சிகிச்சையின் அழகை அனுபவிக்கவும்
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

              <img
                src={image.url}
                alt={image.title}
                className="relative w-full h-64 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-rose-100 text-sm">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;