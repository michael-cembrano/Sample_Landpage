import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Rocket, Zap } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="hero min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        />
      </div>

      <div className="hero-content text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="badge badge-primary badge-lg glass-effect px-6 py-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Now Available in Beta
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your <span className="gradient-text">Creative Ideas</span>
            <br />
            Into Reality
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-base-content/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            InnovateLab empowers creators, entrepreneurs, and visionaries to
            bring their most ambitious projects to life with cutting-edge tools
            and seamless collaboration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg px-8 group"
            >
              Start Creating Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline btn-lg px-8 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100/80 backdrop-blur-lg"
          >
            <div className="stat">
              <div className="stat-figure text-primary">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="stat-title">Projects Launched</div>
              <div className="stat-value text-primary">10K+</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <Zap className="w-8 h-8" />
              </div>
              <div className="stat-title">Active Users</div>
              <div className="stat-value text-secondary">50K+</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-accent">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="stat-title">Success Rate</div>
              <div className="stat-value text-accent">98%</div>
              <div className="stat-desc">↗︎ 12 (2%)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
