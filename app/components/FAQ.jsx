'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load icons
const ChevronDownIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ChevronDownIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded" />
});

const ChevronUpIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ChevronUpIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded" />
});

const EnvelopeIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.EnvelopeIcon), {
  loading: () => <span className="inline-block w-4 h-4 bg-gray-200 rounded" />
});

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Bagaimana cara mengikuti training ini?",
      answer: "Setelah mendaftar melalui formulir, Anda akan menerima email konfirmasi dengan link Zoom training 1 hari sebelum acara. Pastikan untuk join tepat waktu agar tidak ketinggalan sesi penting."
    },
    {
      question: "Apakah ada biaya untuk mengikuti training?",
      answer: "Training ini GRATIS untuk seluruh anggota IAI Muda Malang Raya Gen 9. Namun, jumlah peserta terbatas sehingga pendaftaran dilakukan first come first served."
    },
    {
      question: "Apakah akan ada rekaman jika tidak bisa hadir live?",
      answer: "Ya, training akan direkam dan dibagikan kepada seluruh peserta yang terdaftar. Namun, kami sangat menganjurkan untuk hadir live agar bisa berinteraksi langsung dengan pemateri dan sesama peserta."
    },
    {
      question: "Perangkat apa yang dibutuhkan untuk mengikuti training?",
      answer: "Anda memerlukan laptop/PC atau smartphone dengan koneksi internet stabil. Kami sangat merekomendasikan menggunakan laptop untuk pengalaman terbaik. Pastikan aplikasi Zoom sudah terinstall."
    },
    {
      question: "Apakah mendapatkan sertifikat?",
      answer: "Ya, semua peserta yang hadir penuh (minimal 80% waktu training) akan mendapatkan sertifikat elektronik dari IAI Muda Komisariat Malang yang bisa diunduh setelah training selesai."
    },
    {
      question: "Apakah bisa bertanya langsung ke pemateri?",
      answer: "Tentu! Ada sesi Q&A khusus di akhir setiap sesi dan juga sesi diskusi interaktif. Anda bisa bertanya langsung atau melalui chat Zoom."
    },
    {
      question: "Apakah materi training akan dibagikan?",
      answer: "Ya, semua materi presentasi dalam bentuk PDF akan dibagikan kepada peserta maksimal 2 hari setelah training selesai melalui email dan grup WhatsApp."
    },
    {
      question: "Siapa yang bisa mengikuti training ini?",
      answer: "Training ini terbuka untuk seluruh pengurus, anggota aktif, calon pengurus, dan alumni IAI Muda Malang Raya yang ingin meningkatkan pemahaman tentang kepengurusan organisasi."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-bold">Pertanyaan</span> Umum
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar training ini.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-3 md:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>

              <motion.div
                id={`faq-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="overflow-hidden"
                aria-hidden={activeIndex !== index}
              >
                <div className="pb-4 md:pb-6 text-gray-600 text-sm md:text-base">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-gray-500 mb-3 md:mb-4">Masih ada pertanyaan lain?</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <EnvelopeIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            Hubungi Panitia
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;