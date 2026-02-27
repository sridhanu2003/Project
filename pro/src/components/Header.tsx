import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
        ${isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/90 shadow-md"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("#")}
            >
              <img
                src="/logo.jpg"
                alt="Ruby Wellness Center"
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />

              <div className="hidden md:block text-gray-800">
                <div className="font-bold text-lg">RUBY WELLNESS</div>
                <div className="text-xs tracking-wider text-rose-500">
                  CENTER
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-medium text-gray-700 hover:text-rose-600 transition-colors"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden md:flex bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET?srcterm=Ruby%2520Wellness%2520Center&predocid=9999P4285.4285.231108083046.A1Z9",
                  "_blank"
                )
              }
            >
              Visit Website
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 mb-1.5 bg-gray-800" />
              <div className="w-6 h-0.5 mb-1.5 bg-gray-800" />
              <div className="w-6 h-0.5 bg-gray-800" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2 text-left"
              >
                {item.name}
              </button>
            ))}

            <button
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center"
              onClick={() =>
                window.open(
                  "https://www.justdial.com/Gobichettipalayam/Ruby-Wellness-Center-Gandhi-Nagar/9999P4285-4285-251108084249-I7X2_BZDET?srcterm=Ruby%2520Wellness%2520Center&predocid=9999P4285.4285.231108083046.A1Z9",
                  "_blank"
                )
              }
            >
              Visit Website
            </button>
          </nav>
        </motion.div>
      </motion.header>

      <div className="h-20" />
    </>
  );
};

export default Header;