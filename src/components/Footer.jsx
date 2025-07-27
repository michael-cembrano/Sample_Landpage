import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  ];

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" },
      { name: "Integrations", href: "#integrations" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
      { name: "Partners", href: "#partners" },
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Webinars", href: "#webinars" },
      { name: "Status", href: "#status" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  return (
    <footer id="contact" className="bg-base-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom section-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with InnovateLab
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get the latest updates, feature releases, and exclusive insights
              delivered to your inbox.
            </p>

            <div className="join max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item flex-1 text-base-content"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-neutral join-item"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-6 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold gradient-text">
                InnovateLab
              </span>
            </div>

            <p className="text-base-content/80 mb-6 max-w-sm">
              Empowering creators and innovators worldwide to transform their
              ideas into reality with cutting-edge tools and seamless
              collaboration.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-base-content/70">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>hello@innovatelab.com</span>
              </div>
              <div className="flex items-center text-base-content/70">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-base-content/70">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-circle btn-ghost btn-sm text-base-content/70 hover:text-primary"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <h4 className="font-bold text-lg mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-base-content/70 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="container-custom section-padding py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-base-content/60 text-sm">
              © 2024 InnovateLab. All rights reserved.
            </div>

            <div className="flex items-center text-base-content/60 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#f97316", "#ef4444"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-2"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
              </motion.div>
              <span>by the InnovateLab Team</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
