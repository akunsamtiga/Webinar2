'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);
  }, []);
  return reduced;
};

const speakers = [
  {
    name: "Moh. Syahrul Nur Arsyfi, S.E., M.Ak., CIAP",
    title: "Pemateri",
    role: "President IMUD Komisariat Malang Raya Gen 4",
    company: "Senior Auditor 2 di BDO Indonesia",
    bio: "Expert dalam kepengurusan organisasi dan audit profesional dengan pengalaman memimpin organisasi mahasiswa dan praktisi di industri audit",
    image: "/images/p7.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    expertise: [
      "Manajemen Organisasi",
      "Audit & Assurance",
      "Leadership Development"
    ]
  },
  {
    name: "Muthia Putri A",
    title: "Moderator",
    role: "Pengurus IAI Muda Malang Raya",
    company: "IAI Muda Komisariat Malang",
    bio: "Berpengalaman dalam mengelola acara dan diskusi profesional dengan background di organisasi akuntansi",
    image: "/images/p8.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    expertise: [
      "Event Management",
      "Public Speaking",
      "Organizational Development"
    ]
  }
];

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

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14
    }
  }
};

const Speakers = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  // Mobile/Tablet Carousel View
  if (isMobile) {
    return (
      <section className="relative py-16 bg-white overflow-hidden" aria-labelledby="speakers-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 id="speakers-heading" className="text-3xl sm:text-4xl font-light text-gray-900">
              <span className="text-red-700 font-semibold">Narasumber</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Belajar langsung dari praktisi yang berpengalaman di bidang organisasi dan akuntansi
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-md mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {speakers.map((speaker, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      {/* Gambar */}
                      <div className="relative h-64 w-full bg-gray-100">
                        <Image
                          src={speaker.image}
                          alt={`Foto ${speaker.name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>

                      {/* Informasi */}
                      <div className="p-6 bg-gray-50">
                        {/* Sosial Media */}
                        <div className="flex gap-4 mb-4">
                          <a
                            href={speaker.social.linkedin}
                            aria-label={`LinkedIn ${speaker.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-red-600 transition-colors"
                          >
                            <LinkedinIcon className="w-5 h-5" />
                          </a>
                          <a
                            href={speaker.social.twitter}
                            aria-label={`Twitter ${speaker.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-red-600 transition-colors"
                          >
                            <TwitterIcon className="w-5 h-5" />
                          </a>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                        <p className="text-red-600 font-medium text-sm mb-2">{speaker.title}</p>
                        <p className="text-gray-700 text-sm mb-1">{speaker.role}</p>
                        <p className="text-gray-600 text-sm mb-3">{speaker.company}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{speaker.bio}</p>

                        {/* Expertise */}
                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Keahlian</h4>
                          <div className="flex flex-wrap gap-2">
                            {speaker.expertise.map((item, i) => (
                              <span key={i} className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
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
              aria-label="Speaker sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Speaker selanjutnya"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Bergabunglah dengan narasumber expert ini</p>
            <a
              href="#register"
              className="inline-flex items-center justify-center bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
            >
              Daftar Sekarang
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Grid View
  return (
    <section className="relative py-16 bg-white overflow-hidden" aria-labelledby="speakers-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            id="speakers-heading"
            variants={cardVariants}
            className="text-4xl sm:text-5xl font-light text-gray-900"
          >
            <span className="text-red-700 font-semibold">Narasumber</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Belajar langsung dari praktisi yang berpengalaman di bidang organisasi dan akuntansi
          </motion.p>
        </motion.header>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all"
            >
              {/* Gambar */}
              <div className="relative h-64 w-full">
                <Image
                  src={speaker.image}
                  alt={`Foto ${speaker.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              {/* Informasi */}
              <div className="p-6 bg-gray-50">
                {/* Sosial Media */}
                <div className="flex gap-4 mb-4">
                  <a
                    href={speaker.social.linkedin}
                    aria-label={`LinkedIn ${speaker.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    aria-label={`Twitter ${speaker.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
                <p className="text-red-600 font-medium">{speaker.title}</p>
                <p className="text-gray-700 mt-1">{speaker.role}</p>
                <p className="text-gray-600 text-sm mt-1">{speaker.company}</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{speaker.bio}</p>

                <div className="mt-5 pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Keahlian</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((item, i) => (
                      <span key={i} className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-4">Bergabunglah dengan narasumber expert ini dalam training eksklusif</p>
          <a
            href="#register"
            className="inline-flex items-center justify-center bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Daftar sekarang untuk training"
          >
            Daftar Sekarang
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;