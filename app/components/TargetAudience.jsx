'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BriefcaseIcon, UsersIcon, LightBulbIcon, AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TargetAudience = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const audiences = [
    {
      icon: <UsersIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Pengurus Inti Gen 9",
      description: "Ketua, Sekretaris, Bendahara, dan koordinator divisi yang membutuhkan pemahaman mendalam tentang manajemen organisasi",
      roles: ["Ketua Umum", "Sekretaris", "Bendahara", "Koordinator Divisi"]
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Anggota Aktif",
      description: "Member aktif yang ingin berkontribusi lebih dalam kegiatan organisasi dan pengembangan komunitas",
      roles: ["Staff Divisi", "Volunteer Aktif", "Member Engaged"]
    },
    {
      icon: <LightBulbIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Calon Pengurus",
      description: "Anggota yang berencana aktif di kepengurusan dan ingin mempersiapkan diri dengan baik",
      roles: ["Aspirant Leader", "Future Board Member", "Talent Pool"]
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Alumni & Mentor",
      description: "Pengurus generasi sebelumnya yang ingin berbagi pengalaman dan menjadi mentor",
      roles: ["Alumni Gen 1-8", "Advisor", "Mentor"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % audiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + audiences.length) % audiences.length);
  };

  // Mobile Carousel View
  if (isMobile) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-3">
              Untuk <span className="text-red-600 font-bold">Siapa?</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Training ini dirancang untuk seluruh elemen IAI Muda Malang Raya Gen 9 yang ingin meningkatkan kapabilitas kepengurusan.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-sm mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {audiences.map((audience, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 min-h-[400px] flex flex-col">
                      {/* Icon */}
                      <div
                        className="p-3 bg-red-50 rounded-md w-12 h-12 flex items-center justify-center mb-4"
                        aria-label={`Ikon untuk ${audience.title}`}
                      >
                        {audience.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{audience.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{audience.description}</p>

                      {/* Roles */}
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Posisi Terkait:</h4>
                        <ul className="space-y-2" role="list">
                          {audience.roles.map((role, i) => (
                            <li key={i} role="listitem" className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-600 mr-2">•</span>
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Audience sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Audience selanjutnya"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {audiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-5 bg-red-50 rounded-lg border border-red-100"
          >
            <h3 className="text-base font-medium text-gray-900 mb-3 text-center">Kenapa Harus Ikut?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5">✓</span>
                <span>Meningkatkan skill kepemimpinan</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5">✓</span>
                <span>Networking dengan sesama pengurus</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5">✓</span>
                <span>Best practice dari expert</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5">✓</span>
                <span>Sertifikat resmi dari IAI Muda</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 mb-4 text-sm">Masih ragu? Hubungi kami untuk informasi lebih lanjut</p>
            <a
              href="#register"
              className="inline-block px-6 py-2.5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
            >
              Daftar Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop Grid View
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-3">
            Untuk <span className="text-red-600 font-bold">Siapa?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Training ini dirancang untuk seluruh elemen IAI Muda Malang Raya Gen 9 yang ingin meningkatkan kapabilitas kepengurusan.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
              role="listitem"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="p-2 bg-red-50 rounded-md w-10 h-10 flex items-center justify-center mb-4"
                  aria-label={`Ikon untuk ${audience.title}`}
                >
                  {audience.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{audience.description}</p>

                {/* Roles */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Posisi Terkait:</h4>
                  <ul className="space-y-1.5" role="list">
                    {audience.roles.map((role, i) => (
                      <li key={i} role="listitem" className="text-sm text-gray-600 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-red-50 rounded-lg border border-red-100 max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">Kenapa Harus Ikut?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-0.5">✓</span>
              <span>Meningkatkan skill kepemimpinan</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-0.5">✓</span>
              <span>Networking dengan sesama pengurus</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-0.5">✓</span>
              <span>Best practice dari expert</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-0.5">✓</span>
              <span>Sertifikat resmi dari IAI Muda</span>
            </li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Masih ragu? Hubungi kami untuk informasi lebih lanjut</p>
          <a
            href="#register"
            className="inline-block px-6 py-2.5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
          >
            Daftar Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;