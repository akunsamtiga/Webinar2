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

const MapPinIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.MapPinIcon), {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.4
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
              aria-label="Training status"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Training Langsung • Terbatas
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-4"
              id="hero-heading"
            >
              <span className="text-red-600">In House Training</span> 2023
            </motion.h1>

            {/* Subtitle/Tema */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6"
            >
              Internalisasi Pemahaman dan Kapabilitas Kepengurusan Organisasi
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mt-4 md:mt-6 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              IAI Muda Malang Raya Gen 9 - <span className="font-semibold text-red-600">#Muda, Berani, Berintegritas!</span>
            </motion.p>

            {/* Event Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-2 justify-center lg:justify-start mb-8 md:mb-10 flex-wrap"
            >
              <div className="flex items-center bg-white px-2 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <CalendarIcon className="w-4 h-4 text-red-500 mr-1.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">16 Sept 2023</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-2 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <ClockIcon className="w-4 h-4 text-red-500 mr-1.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">09:00 - Selesai</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-2 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <MapPinIcon className="w-4 h-4 text-red-500 mr-1.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Online</p>
                </div>
              </div>
            </motion.div>

            {/* Organizer Info - Desktop Only */}
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8 p-4 bg-white/50 rounded-lg border border-gray-200 max-w-2xl mx-auto lg:mx-0 lg:block hidden"
            >
              <p className="text-sm text-gray-600 mb-1">Penyelenggara:</p>
              <p className="font-semibold text-gray-900">IAI MUDA KOMISARIAT MALANG</p>
              <p className="text-xs text-gray-500 mt-1">Anggota Muda Ikatan Akuntan Indonesia Komisariat Malang</p>
            </motion.div>

            {/* CTA Button - Desktop Only */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg shadow-sm font-medium transition-colors"
                aria-label="Daftar training sekarang"
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
              transition: { delay: 0.3, duration: 0.6 }
            }}
            className="relative h-full w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <div className="relative w-full h-full aspect-[4/3]">
                <Image
                  src="/images/webinar5.jpg"
                  alt="In House Training IAI Muda Malang Raya"
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

          {/* Mobile-only content after image */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:hidden space-y-6"
          >
            {/* Organizer Info - Mobile */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-white/50 rounded-lg border border-gray-200 max-w-2xl mx-auto"
            >
              <p className="text-sm text-gray-600 mb-1">Penyelenggara:</p>
              <p className="font-semibold text-gray-900">IAI MUDA KOMISARIAT MALANG</p>
              <p className="text-xs text-gray-500 mt-1">Anggota Muda Ikatan Akuntan Indonesia Komisariat Malang</p>
            </motion.div>

            {/* CTA Button - Mobile */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-sm font-medium transition-colors w-full max-w-md"
                aria-label="Daftar training sekarang"
              >
                Daftar Sekarang
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;