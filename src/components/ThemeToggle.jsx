import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="btn btn-circle btn-primary shadow-lg"
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
