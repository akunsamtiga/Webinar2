'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Bagaimana cara mengikuti webinar ini?",
      answer: "Setelah mendaftar, Anda akan menerima email konfirmasi dengan link Zoom webinar 1 hari sebelum acara. Anda bisa join langsung melalui link tersebut saat webinar dimulai."
    },
    {
      question: "Apakah akan ada rekaman jika saya tidak bisa hadir live?",
      answer: "Ya, semua peserta paket Premium akan mendapatkan rekaman full webinar yang bisa diakses selama 1 tahun. Peserta gratis bisa upgrade ke paket Premium untuk mendapatkan rekaman."
    },
    {
      question: "Perangkat apa yang saya butuhkan untuk mengikuti?",
      answer: "Anda hanya perlu perangkat (laptop/HP) dengan koneksi internet stabil. Kami sarankan menggunakan laptop untuk pengalaman terbaik."
    },
    {
      question: "Apakah ada sertifikat partisipasi?",
      answer: "Ya, semua peserta akan mendapatkan sertifikat elektronik yang bisa diunduh setelah webinar selesai."
    },
    {
      question: "Bisakah saya bertanya langsung ke pembicara?",
      answer: "Tentu! Ada sesi Q&A khusus di akhir webinar. Peserta paket Premium akan mendapatkan prioritas pertanyaan."
    },
    {
      question: "Apa kebijakan refund jika saya tidak puas?",
      answer: "Kami menawarkan garansi 100% uang kembali jika Anda tidak puas dengan konten webinar. Cukup kirim email dalam 7 hari setelah acara."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-bold">Pertanyaan</span> Umum
          </h2>
          <p className="text-gray-600">
            Temukan jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-red-600" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Masih ada pertanyaan lain?</p>
          <button className="inline-flex items-center px-5 py-2.5 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium">
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;