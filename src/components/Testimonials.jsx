import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      avatar: "https://picsum.photos/100/100?random=1",
      rating: 5,
      content:
        "InnovateLab transformed how we approach product development. The collaborative features and intuitive interface have boosted our team's productivity by 300%. It's simply revolutionary!",
      highlight: "300% productivity boost",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Design Studio Pro",
      avatar: "https://picsum.photos/100/100?random=2",
      rating: 5,
      content:
        "As a creative professional, I've tried countless tools, but InnovateLab stands out. The AI-powered insights help me make better design decisions, and the global deployment features are game-changing.",
      highlight: "Game-changing features",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "NextGen Solutions",
      avatar: "https://picsum.photos/100/100?random=3",
      rating: 5,
      content:
        "From concept to launch in just 2 weeks! InnovateLab's rapid deployment and enterprise-grade security gave us the confidence to scale quickly. Our investors were impressed with our execution speed.",
      highlight: "2 weeks from concept to launch",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Lead",
      company: "CloudTech Corp",
      avatar: "https://picsum.photos/100/100?random=4",
      rating: 5,
      content:
        "The lightning-fast performance and 99.9% uptime guarantee means we never worry about our infrastructure. InnovateLab handles the complexity so we can focus on innovation.",
      highlight: "99.9% uptime reliability",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Digital Marketing Manager",
      company: "GrowthHack Agency",
      avatar: "https://picsum.photos/100/100?random=5",
      rating: 5,
      content:
        "The analytics and insights provided by InnovateLab helped us understand our users better than ever before. Our campaign performance improved by 250% within the first month!",
      highlight: "250% performance improvement",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0,
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5"
    >
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="badge badge-accent badge-lg px-4 py-2">
              Testimonials
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            What Our <span className="gradient-text">Customers Say</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-base-content/80 max-w-3xl mx-auto"
          >
            Join thousands of satisfied users who have transformed their
            businesses with InnovateLab
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="card bg-base-100 shadow-2xl border border-base-300/50 overflow-hidden">
            <div className="card-body p-8 md:p-12 relative">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="text-center"
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-warning fill-current"
                        />
                      )
                    )}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl font-medium text-base-content mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Highlight Badge */}
                  <div className="badge badge-primary badge-lg mb-6">
                    {testimonials[currentIndex].highlight}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-base-content/70">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-base-content/70 font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="btn btn-circle btn-ghost"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="btn btn-circle btn-ghost"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-base-300 hover:bg-base-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-base-content/60 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-base-content/20 rounded-lg flex items-center justify-center"
              >
                <span className="font-bold text-base-content/40">LOGO</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
