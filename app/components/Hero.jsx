'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    controls.start('visible');
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [controls]);

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

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="relative w-full min-h-screen bg-white overflow-hidden" aria-labelledby="hero-heading">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50 via-white to-white"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-4 pt-20 pb-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-medium mb-4"
              aria-label="Training status"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Training Langsung • Terbatas
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3 px-2"
              id="hero-heading"
            >
              <span className="text-red-600">In House Training</span> 2023
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-base font-semibold text-gray-800 mb-4 px-2"
            >
              Internalisasi Pemahaman dan Kapabilitas Kepengurusan Organisasi
            </motion.h2>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-48 my-6 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src="/images/webinar5.jpg"
                alt="In House Training IAI Muda Malang Raya"
                fill
                className="object-cover object-center"
                priority
                quality={85}
                sizes="100vw"
                loading="eager"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-600 mb-5 px-2"
            >
              IAI Muda Malang Raya Gen 9 - <span className="font-semibold text-red-600">#Muda, Berani, Berintegritas!</span>
            </motion.p>

            {/* Event Info Cards */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 mb-6"
            >
              <div className="flex items-center justify-center bg-white px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm">
                <CalendarIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-900">16 September 2023</p>
              </div>
              <div className="flex items-center justify-center bg-white px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm">
                <ClockIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-900">09:00 - Selesai</p>
              </div>
              <div className="flex items-center justify-center bg-white px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm">
                <MapPinIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-900">Online via Zoom</p>
              </div>
            </motion.div>

            {/* Organizer Info */}
            <motion.div
              variants={itemVariants}
              className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm"
            >
              <p className="text-xs text-gray-600 mb-1">Penyelenggara:</p>
              <p className="font-semibold text-gray-900 text-sm">IAI MUDA KOMISARIAT MALANG</p>
              <p className="text-xs text-gray-500 mt-1">Anggota Muda Ikatan Akuntan Indonesia Komisariat Malang</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md font-medium transition-colors"
                aria-label="Daftar training sekarang"
              >
                Daftar Sekarang
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-100">
                <p className="text-xl font-bold text-red-600">100+</p>
                <p className="text-xs text-gray-600">Peserta</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-100">
                <p className="text-xl font-bold text-red-600">8 Jam</p>
                <p className="text-xs text-gray-600">Training</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-100">
                <p className="text-xl font-bold text-red-600">Gratis</p>
                <p className="text-xs text-gray-600">Biaya</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden" aria-labelledby="hero-heading">
      {/* Background */}
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
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 md:mb-10 flex-wrap"
            >
              <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">16 September 2023</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <ClockIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">09:00 - Selesai</p>
                </div>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                <MapPinIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">Online</p>
                </div>
              </div>
            </motion.div>

            {/* Organizer Info */}
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8 p-4 bg-white/50 rounded-lg border border-gray-200 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-sm text-gray-600 mb-1">Penyelenggara:</p>
              <p className="font-semibold text-gray-900">IAI MUDA KOMISARIAT MALANG</p>
              <p className="text-xs text-gray-500 mt-1">Anggota Muda Ikatan Akuntan Indonesia Komisariat Malang</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;