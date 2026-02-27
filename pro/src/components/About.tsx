
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '20+', label: 'Expert Practitioners' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-rose-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto" />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-pink-200 rounded-3xl blur-xl opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
                alt="Wellness Center"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Your Journey to Wellness Begins Here
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ruby Wellness Center is a premier acupuncture and holistic health clinic dedicated 
              to restoring balance and promoting natural healing. Our expert practitioners combine 
              ancient wisdom with modern techniques to provide personalized care for every patient.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in treating the whole person - mind, body, and spirit. Our serene 
              environment and compassionate team create the perfect setting for healing and 
              transformation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-rose-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-rose-500">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional holistic healthcare that empowers individuals to achieve 
              optimal wellness through natural, non-invasive treatments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              To be the leading center for acupuncture and holistic healing, recognized for 
              excellence in patient care and innovative wellness solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;