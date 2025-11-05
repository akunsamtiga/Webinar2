'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);
  return reducedMotion;
};

const scheduleEvents = [
  { 
    id: 1, 
    time: "08:30 - 09:00", 
    title: "Registrasi Peserta", 
    speaker: "Tim Panitia", 
    location: "Online - Zoom", 
    type: "general",
    description: "Check-in peserta dan persiapan teknis"
  },
  { 
    id: 2, 
    time: "09:00 - 09:15", 
    title: "Pembukaan Acara", 
    speaker: "Ketua Panitia", 
    location: "Main Room", 
    type: "opening",
    description: "Sambutan dan pengantar acara"
  },
  { 
    id: 3, 
    time: "09:15 - 11:00", 
    title: "Sesi 1: Fundamental Kepengurusan Organisasi", 
    speaker: "Moh. Syahrul Nur Arsyfi, S.E., M.Ak., CIAP", 
    location: "Main Room", 
    type: "keynote",
    description: "Pemahaman dasar struktur dan tugas pengurus IAI Muda"
  },
  { 
    id: 4, 
    time: "11:00 - 11:15", 
    title: "Coffee Break", 
    speaker: "", 
    location: "Break Room", 
    type: "break",
    description: "Istirahat dan networking"
  },
  { 
    id: 5, 
    time: "11:15 - 13:00", 
    title: "Sesi 2: Strategi Pengembangan Anggota", 
    speaker: "Moh. Syahrul Nur Arsyfi, S.E., M.Ak., CIAP", 
    location: "Main Room", 
    type: "workshop",
    description: "Teknik recruitment dan engagement member"
  },
  { 
    id: 6, 
    time: "13:00 - 14:00", 
    title: "Ishoma (Istirahat, Sholat, Makan)", 
    speaker: "", 
    location: "Break", 
    type: "break",
    description: "Waktu istirahat dan makan siang"
  },
  { 
    id: 7, 
    time: "14:00 - 15:30", 
    title: "Sesi 3: Manajemen Program & Kegiatan", 
    speaker: "Moh. Syahrul Nur Arsyfi, S.E., M.Ak., CIAP", 
    location: "Main Room", 
    type: "case-study",
    description: "Perencanaan, eksekusi, dan evaluasi program"
  },
  { 
    id: 8, 
    time: "15:30 - 16:30", 
    title: "Diskusi Interaktif & Q&A", 
    speaker: "Moderator: Muthia Putri A", 
    location: "Main Room", 
    type: "panel",
    description: "Sesi tanya jawab dan sharing pengalaman"
  },
  { 
    id: 9, 
    time: "16:30 - 17:00", 
    title: "Penutupan & Foto Bersama", 
    speaker: "Tim Panitia", 
    location: "Main Room", 
    type: "closing",
    description: "Closing statement dan dokumentasi"
  }
];

const getEventColor = (type) => {
  switch (type) {
    case 'keynote': return 'bg-red-50 border-red-200 text-red-600';
    case 'workshop': return 'bg-blue-50 border-blue-200 text-blue-600';
    case 'panel': return 'bg-purple-50 border-purple-200 text-purple-600';
    case 'break': return 'bg-gray-50 border-gray-200 text-gray-600';
    case 'opening': return 'bg-green-50 border-green-200 text-green-600';
    case 'closing': return 'bg-orange-50 border-orange-200 text-orange-600';
    case 'case-study': return 'bg-teal-50 border-teal-200 text-teal-600';
    default: return 'bg-gray-50 border-gray-200 text-gray-600';
  }
};

const Schedule = () => {
  const reducedMotion = usePrefersReducedMotion();
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scheduleEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scheduleEvents.length) % scheduleEvents.length);
  };

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
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Mobile Carousel View
  if (isMobile) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-2xl">
          {/* Heading */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              Jadwal <span className="font-bold text-red-600">Training</span>
            </h1>
            <p className="text-gray-500 mb-4 text-sm">
              Sabtu, 16 September 2023
            </p>
            <div className="flex flex-col gap-2 text-xs text-gray-600">
              <div className="flex items-center justify-center">
                <Calendar className="w-3 h-3 mr-1 text-red-500" />
                <span>Full Day Training</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-3 h-3 mr-1 text-red-500" />
                <span>08:30 - 17:00 WIB</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-3 h-3 mr-1 text-red-500" />
                <span>Online via Zoom</span>
              </div>
            </div>
          </motion.header>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {scheduleEvents.map((event) => (
                  <div key={event.id} className="w-full flex-shrink-0 px-2">
                    <article
                      className={`p-5 border rounded-lg ${getEventColor(event.type)} min-h-[320px] flex flex-col`}
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-base font-medium text-gray-900">{event.title}</h3>
                          </div>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                            getEventColor(event.type)
                          }`}>
                            {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        </div>
                      </div>
                      
                      {event.speaker && (
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Pembicara:</span> {event.speaker}
                        </p>
                      )}
                      
                      {event.description && (
                        <p className="text-sm text-gray-600 mb-3 flex-grow">{event.description}</p>
                      )}
                      
                      <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
                        <span className="inline-flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                          {event.time}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                          {event.location}
                        </span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Jadwal sebelumnya"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Jadwal selanjutnya"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1 mt-6 flex-wrap">
              {scheduleEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === index ? 'bg-red-600 w-6' : 'bg-gray-300 w-1.5'
                  }`}
                  aria-label={`Jadwal ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-gray-600">
              {currentSlide + 1} / {scheduleEvents.length}
            </div>
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 p-4 bg-white rounded-lg border border-gray-200"
          >
            <h3 className="font-medium text-gray-900 mb-2 text-sm">Catatan Penting:</h3>
            <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
              <li>Link Zoom akan dikirimkan H-1 via email dan WhatsApp Group</li>
              <li>Pastikan koneksi internet stabil untuk pengalaman terbaik</li>
              <li>Sertifikat akan diberikan kepada peserta yang hadir penuh</li>
              <li>Materi training akan dibagikan dalam bentuk PDF</li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop Grid View
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 sm:p-8 rounded-2xl">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">
            Jadwal <span className="font-bold text-red-600">Training</span>
          </h1>
          <p className="text-gray-500 mb-4">
            Sabtu, 16 September 2023
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-red-500" />
              <span>Full Day Training</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-red-500" />
              <span>08:30 - 17:00 WIB</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-red-500" />
              <span>Online via Zoom</span>
            </div>
          </div>
        </motion.header>

        {/* Jadwal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {scheduleEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              className={`p-4 sm:p-5 border rounded-lg ${getEventColor(event.type)} transition-all hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                  <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">{event.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 ${
                        getEventColor(event.type)
                      }`}>
                        {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                    
                    {event.speaker && (
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Pembicara:</span> {event.speaker}
                      </p>
                    )}
                    
                    {event.description && (
                      <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-white rounded-lg border border-gray-200"
        >
          <h3 className="font-medium text-gray-900 mb-2">Catatan Penting:</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Link Zoom akan dikirimkan H-1 via email dan WhatsApp Group</li>
            <li>Pastikan koneksi internet stabil untuk pengalaman terbaik</li>
            <li>Sertifikat akan diberikan kepada peserta yang hadir penuh</li>
            <li>Materi training akan dibagikan dalam bentuk PDF</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;