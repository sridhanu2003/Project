import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "முகப்பு", href: "#" },
    { name: "எங்களை பற்றி", href: "#about" },
    { name: "சேவைகள்", href: "#services" },
    { name: "காட்சியகம்", href: "#gallery" },
    { name: "தொடர்பு", href: "#contact" },
  ];

  const services = [
    "அக்யுபங்சர் சிகிச்சை",
    "முழுமையான நல சேவை",
    "வலி மேலாண்மை",
    "இயற்கை சிகிச்சை",
    "மனஅழுத்த நிவாரணம்",
    "நல ஆலோசனை",
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo Image */}
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border border-rose-400/40">
                <img
                  src="/logo.jpg"
                  alt="Ruby Wellness Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="font-bold text-lg">RUBY WELLNESS</div>
                <div className="text-xs tracking-wider text-rose-300">
                  CENTER
                </div>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed">
              முழுமையான நலமும் இயற்கை சிகிச்சையும் வழங்கும் உங்கள் நம்பகமான
              இணைவர். அக்யுபங்சர் மற்றும் இயற்கை மருத்துவத்தின் மூலம்
              ஆரோக்கியமான வாழ்க்கையை அனுபவிக்குங்கள்.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">விரைவு இணைப்புகள்</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">எங்கள் சேவைகள்</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <p className="text-gray-300">{service}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">தொடர்பு கொள்ள</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 text-xl">📍</span>
                <span className="text-gray-300">
                  காந்தி நகர்,<br />
                  கோபிச்செட்டிபாளையம்,<br />
                  தமிழ்நாடு, இந்தியா
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-rose-400 text-xl">📞</span>
                <span className="text-gray-300">+91 99999 42854</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-rose-400 text-xl">✉️</span>
                <span className="text-gray-300">info@rubywellness.com</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-rose-400 text-xl">🕐</span>
                <span className="text-gray-300">
                  திங்கள் - சனி: காலை 9 - மாலை 7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visit Website CTA */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center"
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            எங்கள் அதிகாரப்பூர்வ இணையதளத்தை பார்வையிடுங்கள்
          </h3>
          <p className="text-rose-100 mb-6">
            எங்கள் சேவைகள், சிகிச்சைகள் மற்றும் நல திட்டங்களை பற்றி மேலும்
            அறியுங்கள்
          </p>

          <motion.button
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET?srcterm=Ruby%2520Wellness%2520Center&predocid=9999P4285.4285.231108083046.A1Z9",
                "_blank"
              )
            }
          >
            JustDial ப்ரொஃபைலை பாருங்கள்
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ரூபி வெல்னஸ் மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-rose-400 transition-colors">
                தனியுரிமைக் கொள்கை
              </button>
              <button className="hover:text-rose-400 transition-colors">
                சேவை விதிமுறைகள்
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;