import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Acupuncture Therapy",
    "Holistic Wellness",
    "Pain Management",
    "Natural Healing",
    "Stress Relief",
    "Wellness Consultation",
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
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">RW</span>
              </div>
              <div>
                <div className="font-bold text-lg">RUBY WELLNESS</div>
                <div className="text-xs tracking-wider text-rose-300">
                  CENTER
                </div>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in holistic healing and wellness.
              Experience the transformative power of acupuncture and natural
              therapies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
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
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
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
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 text-xl">📍</span>
                <span className="text-gray-300">
                  Gandhi Nagar,<br />
                  Gobichettipalayam,<br />
                  Tamil Nadu, India
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
                <span className="text-gray-300">Mon-Sat: 9AM-7PM</span>
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
            Visit Our Official Website
          </h3>
          <p className="text-rose-100 mb-6">
            Explore more about our services, treatments, and wellness programs
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
            Visit JustDial Profile
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ruby Wellness Center. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-rose-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-rose-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;