import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('உங்கள் செய்திக்கு நன்றி! விரைவில் உங்களை தொடர்பு கொள்கிறோம்.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            எங்களை{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              தொடர்பு கொள்ளுங்கள்
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            ஏதேனும் கேள்விகள் உள்ளதா? உங்கள் நலப் பயணத்தில் உதவ நாங்கள் இருக்கிறோம்.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div className="bg-white rounded-2xl shadow-xl p-8" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">முழு பெயர்</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="உங்கள் பெயர்"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">மின்னஞ்சல் முகவரி</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">தொலைபேசி எண்</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">செய்தி</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
                  placeholder="எப்படி உதவலாம்?"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                செய்தியை அனுப்புங்கள்
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">தொடர்பு தகவல்கள்</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">முகவரி</h4>
                    <p className="text-gray-600">
                      காந்தி நகர்,<br />
                      கோபிச்செட்டிபாளையம்,<br />
                      தமிழ்நாடு, இந்தியா
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">தொலைபேசி</h4>
                    <p className="text-gray-600">+91 99999 42854</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">மின்னஞ்சல்</h4>
                    <p className="text-gray-600">info@rubywellness.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">வேலை நேரம்</h4>
                    <p className="text-gray-600">
                      திங்கள் - சனி: காலை 9:00 - மாலை 7:00<br />
                      ஞாயிறு: விடுமுறை
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">எங்களை பின்தொடருங்கள்</h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <motion.button
                    key={social}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;