'use client';

import { motion } from 'framer-motion';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Simple standalone bubble component
  const FloatingBubble = ({ 
    size, 
    color, 
    initialX, 
    initialY, 
    delay = 0
  }: {
    size: number;
    color: string;
    initialX: string;
    initialY: string;
    delay?: number;
  }) => {
    return (
      <motion.div
        className="absolute pointer-events-none bubble"
        style={{
          left: initialX,
          top: initialY,
          width: size,
          height: size,
          zIndex: 1,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 0.8, 1, 1, 1, 1, 1, 0.8, 0],
          opacity: [0, 0.3, 0.7, 0.8, 0.8, 0.8, 0.7, 0.5, 0],
          y: [0, -10, -15, -20, -20, -20, -15, -10, 0]
        }}
        transition={{
          duration: 12,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1]
        }}
      >
        <div
          className={`w-full h-full rounded-full ${color}`}
        />
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-yellow-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 hero-backdrop rounded-3xl p-8 bg-white/10 backdrop-blur-sm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Glow,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Healthy Skin
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Discover premium beauty products from trusted brands. Transform your
            skincare routine with our carefully curated collection of serums,
            treatments, and professional-grade beauty essentials.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Shop Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
            >
              Our Services
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 sm:pt-12"
          >
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Trusted by beauty enthusiasts worldwide
            </p>
            <div className="flex justify-center items-center space-x-6 opacity-60">
              <div className="text-xs sm:text-sm font-medium text-gray-500">
                Premium Brands
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-xs sm:text-sm font-medium text-gray-500">
                Expert Care
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-xs sm:text-sm font-medium text-gray-500">
                Proven Results
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple Floating Bubbles */}
      <FloatingBubble 
        size={80} 
        color="bg-pink-400" 
        initialX="8%" 
        initialY="15%" 
        delay={0}
      />
      <FloatingBubble 
        size={120} 
        color="bg-yellow-400" 
        initialX="85%" 
        initialY="20%" 
        delay={1}
      />
      <FloatingBubble 
        size={60} 
        color="bg-pink-300" 
        initialX="15%" 
        initialY="60%" 
        delay={2}
      />
      <FloatingBubble 
        size={90} 
        color="bg-yellow-300" 
        initialX="90%" 
        initialY="70%" 
        delay={0.5}
      />
      <FloatingBubble 
        size={45} 
        color="bg-pink-500" 
        initialX="75%" 
        initialY="45%" 
        delay={1.5}
      />
      <FloatingBubble 
        size={70} 
        color="bg-yellow-500" 
        initialX="5%" 
        initialY="85%" 
        delay={2.5}
      />
      
      {/* Additional smaller bubbles */}
      <FloatingBubble 
        size={35} 
        color="bg-pink-200" 
        initialX="25%" 
        initialY="25%" 
        delay={3}
      />
      <FloatingBubble 
        size={40} 
        color="bg-yellow-200" 
        initialX="65%" 
        initialY="80%" 
        delay={1.8}
      />
    </section>
  );
};

export default Hero;