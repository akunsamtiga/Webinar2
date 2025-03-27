'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animasi Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-16 pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            {/* Minimal Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
              Live Webinar • Terbatas
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900"
            >
              <span className="text-red-600">Mastering</span> AI {' '}
              <br className="hidden sm:block" />
              for Modern Business
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mt-6 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Essential strategies for implementing artificial intelligence in your business operations.
            </motion.p>

            {/* Info Box */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <CalendarIcon className="w-5 h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">June 25, 2024</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <ClockIcon className="w-5 h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">7:00 PM WIB</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-sm font-medium transition-colors"
              >
                Register Now
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content - Minimalist Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.4, duration: 0.8 }
            }}
            className="relative h-full w-full min-h-[300px] lg:min-h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/images/webinar5.jpg"
                  alt="AI Illustration"
                  fill
                  className="object-contain object-center"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;