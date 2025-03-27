'use client';
import { motion } from 'framer-motion';
import { CheckCircleIcon, UsersIcon, ArrowTrendingUpIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: <CheckCircleIcon className="w-5 h-5 text-red-600" />,
      title: "Materi Inovatif",
      desc: "Kurikulum berbasis kasus industri terkini"
    },
    {
      icon: <UsersIcon className="w-5 h-5 text-red-600" />,
      title: "Networking",
      desc: "Interaksi dengan praktisi dan peserta"
    },
    {
      icon: <ArrowTrendingUpIcon className="w-5 h-5 text-red-600" />,
      title: "Data Terkini",
      desc: "Analisis tren AI 2024"
    },
    {
      icon: <BriefcaseIcon className="w-5 h-5 text-red-600" />,
      title: "Sertifikat",
      desc: "Bukti partisipasi profesional"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-3">
            Tentang <span className="text-red-600 font-bold">Webinar</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Transformasi bisnis melalui implementasi AI dalam sesi intensif 2 jam.
          </p>
        </div>

        {/* Video Promosi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/A_8RQ1IkRGE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Tonton video pengantar webinar kami
          </p>
        </motion.div>

        {/* Konten Utama */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Deskripsi */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Yang Akan Dipelajari</h3>
              <ul className="space-y-3">
                {[
                  "Fundamental AI untuk bisnis",
                  "Tools praktis siap pakai",
                  "Studi kasus nyata",
                  "Roadmap transformasi digital"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-600"
                  >
                    <CheckCircleIcon className="w-4 h-4 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fitur Webinar */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-4 bg-red-50/30 rounded-lg"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-white rounded-md border border-red-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-8">Untuk Siapa?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Profesional Bisnis",
                desc: "CEO, Manajer, dan pengambil keputusan"
              },
              {
                title: "Tim Teknologi",
                desc: "Developer dan IT specialist"
              },
              {
                title: "Startup Founder",
                desc: "Pendiri startup dan digital entrepreneur"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="p-5 bg-gray-50 rounded-xl text-center"
              >
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <UsersIcon className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;