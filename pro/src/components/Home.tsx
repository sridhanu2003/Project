import React, { useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Animated Premium Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-800 to-rose-900"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />

      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div ref={ref} animate={controls} initial="hidden" className="text-left">
            
            {/* Women's Symbol */}
            <motion.div
              variants={item}
              className="text-6xl mb-6 text-pink-300"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ♀
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={item}
              className="mb-6 inline-block px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white text-sm tracking-widest"
            >
              சர்வதேச மகளிர் தினம் 2026
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              RUBY
              <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
                WELLNESS CENTER
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mt-6 text-lg md:text-xl text-pink-100 max-w-xl"
            >
              உலகம் முழுவதும் பெண்களின் சாதனைகள், தைரியம் மற்றும்
              திறமையை கௌரவிப்போம். ஊக்குவிப்போம். மாற்றத்தை உருவாக்குவோம்.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="mt-10 flex gap-6 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg"
              >
                நிகழ்வுகளை பார்க்க
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-3 border border-white/40 text-white rounded-full backdrop-blur-lg"
              >
                மேலும் அறிய
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <motion.img
              src="/flower.jpg"
              alt="மகளிர் தின மலர்"
              className="rounded-3xl shadow-2xl w-[420px] lg:w-[500px] object-cover"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Home;