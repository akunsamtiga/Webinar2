'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

// Lazy load non-critical icons
const CalendarIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.CalendarIcon), {
  ssr: false,
  loading: () => <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
});

const ClockIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.ClockIcon), {
  ssr: false,
  loading: () => <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
});

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Optimized animations for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.15
        delayChildren: 0.2    // Reduced from 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced from y:30
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween', // Changed from 'spring' for better performance
        ease: 'easeOut',
        duration: 0.4   // Reduced duration
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden" aria-labelledby="hero-heading">
      {/* Background with reduced complexity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-red-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4 md:mb-6"
              aria-label="Webinar status"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Webinar Langsung • Terbatas
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900"
              id="hero-heading"
            >
              <span className="text-red-600">Menguasai</span> AI {' '}
              <br className="hidden sm:block" />
              untuk Bisnis Modern
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mt-4 md:mt-6 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Strategi penting dalam menerapkan kecerdasan buatan untuk operasional bisnis yang lebih efisien.
            </motion.p>

            {/* Event Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 md:mb-10"
            >
              <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">25 Juni 2024</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <ClockIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">19:00 WIB</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }} // Reduced from 1.03
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg shadow-sm font-medium transition-colors"
                aria-label="Daftar webinar sekarang"
              >
                Daftar Sekarang
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.3, duration: 0.6 } // Reduced delay and duration
            }}
            className="relative h-full w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <div className="relative w-full h-full aspect-[4/3]">
                <Image
                  src="/images/webinar5.jpg"
                  alt="Ilustrasi penerapan AI dalam bisnis modern"
                  fill
                  className="object-contain object-center"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
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