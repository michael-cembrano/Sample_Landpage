import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-lg shadow-lg border-b border-base-300"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex-1">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="btn btn-ghost text-xl font-bold gradient-text"
          >
            <Zap className="w-6 h-6 mr-2" />
            InnovateLab
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="btn btn-ghost hover:btn-primary"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-square btn-ghost"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-base-100/95 backdrop-blur-lg border-t border-base-300"
      >
        <div className="container-custom section-padding py-4">
          <ul className="menu space-y-2">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="btn btn-ghost justify-start"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn btn-primary justify-start"
              >
                Get Started
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
