'use client';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const Speakers = () => {
  // Data pembicara
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

  // Variants animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
          >
            <span className="text-red-700">Pembicara Expert</span>
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Belajar langsung dari para praktisi yang telah sukses menerapkan AI di berbagai industri.
          </motion.p>
        </motion.div>

        {/* Grid Pembicara */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-t-[150px] overflow-hidden border border-gray-100 hover:shadow-md transition-all"
            >
              {/* Foto Pembicara */}
              <div className="relative h-72">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>

              {/* Info Pembicara */}
              <div className="p-6 relative bg-gray-100 rounded-b-2xl">
                {/* Social buttons */}
                <div className="flex gap-3 mb-4">
                  <a 
                    href={speaker.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href={speaker.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-red-600 font-medium mt-1">{speaker.title}</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{speaker.bio}</p>

                {/* Pengalaman */}
                <div className="mt-4 pt-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fokus Materi</h4>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Implementasi AI Praktis",
                      "Studi Kasus Nyata",
                      "Solusi Industri Spesifik"
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Bergabunglah dengan {speakers.length} expert ini dalam webinar eksklusif</p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Daftar Sekarang
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;