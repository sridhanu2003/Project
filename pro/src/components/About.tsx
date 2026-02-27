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
    { number: '15+', label: 'ஆண்டுகள் அனுபவம்' },
    { number: '5000+', label: 'மகிழ்ச்சியான நோயாளிகள்' },
    { number: '20+', label: 'நிபுணர் மருத்துவர்கள்' },
    { number: '100%', label: 'முழு அர்ப்பணிப்பு' },
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
            எங்களை பற்றி{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              
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
              உங்கள் நல வாழ்வு பயணம் இங்கிருந்து தொடங்குகிறது
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              ரூபி வெல்னஸ் சென்டர் என்பது அக்யுபங்சர் மற்றும் இயற்கை மருத்துவத்தில் 
              சிறப்பு பெற்ற ஒரு முன்னணி சிகிச்சை மையமாகும். எங்கள் நிபுணர் மருத்துவர்கள் 
              பாரம்பரிய அறிவையும் நவீன முறைகளையும் இணைத்து ஒவ்வொரு நோயாளிக்கும் 
              தனிப்பட்ட சிகிச்சையை வழங்குகின்றனர்.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              நாங்கள் மனம், உடல் மற்றும் ஆன்மாவை ஒருங்கிணைத்து சிகிச்சை அளிப்பதை 
              நம்புகிறோம். அமைதியான சூழலும் அன்பான மருத்துவ குழுவும் 
              உங்கள் குணமடையும் பயணத்திற்கு சிறந்த சூழலை உருவாக்குகின்றன.
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
            <h4 className="text-2xl font-bold text-gray-800 mb-4">எங்கள் நோக்கம்</h4>
            <p className="text-gray-600 leading-relaxed">
              இயற்கை மற்றும் பாதுகாப்பான சிகிச்சைகள் மூலம் ஒவ்வொரு நபருக்கும் 
              சிறந்த ஆரோக்கியத்தை வழங்குவது எங்கள் நோக்கமாகும்.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">எங்கள் பார்வை</h4>
            <p className="text-gray-600 leading-relaxed">
              அக்யுபங்சர் மற்றும் இயற்கை சிகிச்சைகளில் முன்னணி மையமாக 
              உருவெடுத்து சிறந்த மருத்துவ சேவையை வழங்குவது எங்கள் பார்வையாகும்.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;