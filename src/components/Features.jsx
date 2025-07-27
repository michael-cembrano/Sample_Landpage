import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Users,
  Rocket,
  Brain,
  Globe,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.",
      details: [
        "99.9% uptime guarantee",
        "Global CDN network",
        "Sub-second load times",
        "Auto-scaling infrastructure",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, ensuring your data and projects remain protected.",
      details: [
        "256-bit SSL encryption",
        "SOC 2 Type II compliance",
        "Regular security audits",
        "Multi-factor authentication",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Seamlessly collaborate with your team in real-time, from anywhere in the world.",
      details: [
        "Real-time synchronization",
        "Role-based permissions",
        "Video conferencing integration",
        "Activity tracking & analytics",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description:
        "Leverage artificial intelligence to get smart recommendations and automate routine tasks.",
      details: [
        "Intelligent content suggestions",
        "Automated workflows",
        "Predictive analytics",
        "Smart resource optimization",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Deploy and scale your projects globally with our worldwide infrastructure network.",
      details: [
        "Multi-region deployment",
        "Localization support",
        "Currency & payment options",
        "24/7 global support",
      ],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Deployment",
      description:
        "Go from idea to production in minutes with our streamlined deployment pipeline.",
      details: [
        "One-click deployments",
        "Automated testing",
        "Rollback capabilities",
        "Environment management",
      ],
    },
  ];

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

  return (
    <section id="features" className="py-20 lg:py-32 bg-base-200/50">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="badge badge-secondary badge-lg px-4 py-2">
              Features
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-base-content/80 max-w-3xl mx-auto"
          >
            Our comprehensive platform provides all the tools and features you
            need to transform your ideas into successful projects.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300/50"
            >
              <div className="card-body">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl mb-3">{feature.title}</h3>
                <p className="text-base-content/80 mb-4">
                  {feature.description}
                </p>
                <div className="card-actions justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(index)}
                    className="btn btn-primary btn-sm"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <div className="tabs tabs-boxed mb-8 overflow-x-auto">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`tab whitespace-nowrap ${
                    activeTab === index ? "tab-active" : ""
                  }`}
                >
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-primary mr-3">
                    {features[activeTab].icon}
                  </span>
                  {features[activeTab].title}
                </h3>
                <p className="text-lg text-base-content/80 mb-6">
                  {features[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {features[activeTab].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="mockup-window border bg-base-300">
                  <div className="flex justify-center px-4 py-16 bg-base-200">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-primary"
                    >
                      {React.cloneElement(features[activeTab].icon, {
                        className: "w-24 h-24",
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
