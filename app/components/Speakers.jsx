'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, ArrowRightIcon } from 'lucide-react';
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
    name: "Dr. Sarah Lim",
    title: "AI Research Lead at TechCorp",
    bio: "Pakar dengan 10+ tahun pengalaman dalam penerapan AI di industri finansial",
    image: "/images/p7.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Michael Chen",
    title: "CTO StartupAI",
    bio: "Membangun solusi AI untuk UMKM dengan pendekatan praktis",
    image: "/images/p8.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Dr. Anisa Putri",
    title: "Dosen AI Universitas Teknologi",
    bio: "Peneliti bidang NLP dan penerapannya dalam bisnis",
    image: "/images/p9.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
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
            <span className="text-red-700 font-semibold">Pembicara Expert</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Belajar langsung dari para praktisi yang telah sukses menerapkan AI di berbagai industri.
          </motion.p>
        </motion.header>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    aria-label={`Twitter ${speaker.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
                <p className="text-red-600 font-medium">{speaker.title}</p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{speaker.bio}</p>

                <div className="mt-5 pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fokus Materi</h4>
                  <ul className="mt-2 space-y-1">
                    {[
                      "Implementasi AI Praktis",
                      "Studi Kasus Nyata",
                      "Solusi Industri Spesifik"
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
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
          <p className="text-gray-600 mb-4">Bergabunglah dengan {speakers.length} expert ini dalam webinar eksklusif</p>
          <a
            href="#register"
            className="inline-flex items-center justify-center bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Daftar sekarang untuk webinar"
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
