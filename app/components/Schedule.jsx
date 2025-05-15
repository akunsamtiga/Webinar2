'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

// Hook untuk mendeteksi preferensi reduced motion
const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);
  return reducedMotion;
};

// Data schedule untuk Day 1
const day1Events = [
  { id: 1, time: "08:00 - 09:00", title: "Registrasi Peserta", speaker: "Tim Panitia", location: "Lobby Utama", type: "general" },
  { id: 2, time: "09:00 - 09:30", title: "Pembukaan Acara", speaker: "Direktur Utama", location: "Auditorium A", type: "opening" },
  { id: 3, time: "09:30 - 11:00", title: "Keynote: Tren AI 2024", speaker: "Dr. Sarah Lim", location: "Auditorium A", type: "keynote" },
  { id: 4, time: "11:00 - 12:30", title: "Workshop: Dasar-dasar Machine Learning", speaker: "Michael Chen", location: "Ruang Workshop 1", type: "workshop" },
  { id: 5, time: "12:30 - 14:00", title: "Makan Siang", speaker: "", location: "Area Makan", type: "break" },
  { id: 6, time: "14:00 - 15:30", title: "Case Study: Implementasi AI di Fintech", speaker: "Budi Santoso", location: "Auditorium B", type: "case-study" },
  { id: 7, time: "15:30 - 16:00", title: "Coffee Break", speaker: "", location: "Area Break", type: "break" },
  { id: 8, time: "16:00 - 17:30", title: "Panel Diskusi: Etika AI", speaker: "Dr. Anisa Putri dkk.", location: "Auditorium A", type: "panel" }
];

// Data schedule untuk Day 2
const day2Events = [
  { id: 1, time: "09:00 - 10:30", title: "Advanced Deep Learning", speaker: "Prof. David Wilson", location: "Auditorium A", type: "masterclass" },
  { id: 2, time: "10:30 - 12:00", title: "Workshop: Computer Vision", speaker: "Lisa Zhang", location: "Lab Komputer 1", type: "workshop" },
  { id: 3, time: "12:00 - 13:30", title: "Makan Siang", speaker: "", location: "Area Makan", type: "break" },
  { id: 4, time: "13:30 - 15:00", title: "Startup Pitch Session", speaker: "5 Startup Terpilih", location: "Auditorium B", type: "pitch" },
  { id: 5, time: "15:00 - 15:30", title: "Networking Break", speaker: "", location: "Area Break", type: "break" },
  { id: 6, time: "15:30 - 17:00", title: "Closing Ceremony", speaker: "Tim Organizer", location: "Auditorium A", type: "closing" }
];

const getEventColor = (type) => {
  switch (type) {
    case 'keynote': return 'bg-red-50 border-red-200 text-red-600';
    case 'workshop': return 'bg-blue-50 border-blue-200 text-blue-600';
    case 'panel': return 'bg-purple-50 border-purple-200 text-purple-600';
    case 'break': return 'bg-gray-50 border-gray-200 text-gray-600';
    case 'opening': return 'bg-green-50 border-green-200 text-green-600';
    case 'closing': return 'bg-orange-50 border-orange-200 text-orange-600';
    case 'masterclass': return 'bg-indigo-50 border-indigo-200 text-indigo-600';
    case 'case-study': return 'bg-teal-50 border-teal-200 text-teal-600';
    case 'pitch': return 'bg-pink-50 border-pink-200 text-pink-600';
    default: return 'bg-gray-50 border-gray-200 text-gray-600';
  }
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const activeEvents = activeDay === 1 ? day1Events : day2Events;
  const reducedMotion = usePrefersReducedMotion();

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

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-2xl">

        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-light text-gray-900 mb-2">
            Event <span className="font-bold text-red-600">Schedule</span>
          </h1>
          <p className="text-gray-500">
            Jadwal lengkap acara dan sesi pembelajaran
          </p>
        </motion.header>

        {/* Tab Hari */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={reducedMotion ? {} : { opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center space-x-4 p-2 bg-gray-50 rounded-lg">
            <button
              aria-label="Lihat jadwal hari pertama"
              onClick={() => setActiveDay(1)}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                activeDay === 1 ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Day 1 - 15 Juni
            </button>
            <button
              aria-label="Lihat jadwal hari kedua"
              onClick={() => setActiveDay(2)}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                activeDay === 2 ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Day 2 - 16 Juni
            </button>
          </div>
        </motion.nav>

        {/* Info Hari */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={reducedMotion ? {} : { opacity: 1 }}
          className="mb-6"
        >
          <h2 className="text-xl font-medium text-gray-800">
            {activeDay === 1 ? 'Hari Pertama' : 'Hari Kedua'}
          </h2>
          <p className="text-gray-500 text-sm">
            {activeDay === 1 ? 'Rabu, 15 Juni 2024' : 'Kamis, 16 Juni 2024'}
          </p>
        </motion.section>

        {/* Jadwal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {activeEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              className={`p-5 border rounded-lg ${getEventColor(event.type)}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-5 h-5 text-gray-400 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{event.title}</h3>
                    {event.speaker && (
                      <p className="text-sm text-gray-600 mb-2">Oleh: {event.speaker}</p>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" aria-hidden="true" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <MapPinIcon className="w-4 h-4 mr-1" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    getEventColor(event.type)
                  }`}>
                    {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
