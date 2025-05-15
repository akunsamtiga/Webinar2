'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load non-critical icons with better loading states
const CheckCircleIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.CheckCircleIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded-full animate-pulse" />,
  ssr: false
});
const UsersIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.UsersIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded-full animate-pulse" />,
  ssr: false
});
const ArrowTrendingUpIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ArrowTrendingUpIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded-full animate-pulse" />,
  ssr: false
});
const BriefcaseIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.BriefcaseIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded-full animate-pulse" />,
  ssr: false
});

const About = () => {
  // Data moved to constants for better maintainability
  const FEATURES = [
    {
      icon: <CheckCircleIcon className="w-5 h-5 text-red-600" aria-hidden="true" />,
      title: "Materi Inovatif",
      desc: "Kurikulum berbasis kasus industri terkini"
    },
    {
      icon: <UsersIcon className="w-5 h-5 text-red-600" aria-hidden="true" />,
      title: "Networking",
      desc: "Interaksi dengan praktisi dan peserta"
    },
    {
      icon: <ArrowTrendingUpIcon className="w-5 h-5 text-red-600" aria-hidden="true" />,
      title: "Data Terkini",
      desc: "Analisis tren AI 2024"
    },
    {
      icon: <BriefcaseIcon className="w-5 h-5 text-red-600" aria-hidden="true" />,
      title: "Sertifikat",
      desc: "Bukti partisipasi profesional"
    }
  ];

  const LEARNING_POINTS = [
    "Fundamental AI untuk bisnis",
    "Tools praktis siap pakai",
    "Studi kasus nyata",
    "Roadmap transformasi digital"
  ];

  const TARGET_AUDIENCE = [
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
  ];

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section with better semantic structure */}
        <header className="text-center mb-8 md:mb-12">
          <h1 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3">
            Tentang <span className="text-red-600 font-bold">Webinar</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Transformasi bisnis melalui implementasi AI dalam sesi intensif 2 jam.
          </p>
        </header>

        {/* Video Promosi with optimized loading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "100px" }}
          className="mb-10 md:mb-14"
        >
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm relative">
            {/* Lazy-loaded iframe with placeholder */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/A_8RQ1IkRGE?autoplay=0"
              title="Video pengantar webinar AI untuk bisnis"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
              loading="lazy"
              aria-label="Video pengantar webinar"
              importance="low"
            />
            <noscript>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center p-4">
                  <p className="text-gray-500">Aktifkan JavaScript untuk menonton video</p>
                </div>
              </div>
            </noscript>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Tonton video pengantar webinar kami
          </p>
        </motion.div>

        {/* Main Content */}
        <main>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Deskripsi */}
            <article className="flex-1 space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Yang Akan Dipelajari</h2>
                <ul className="space-y-3">
                  {LEARNING_POINTS.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-red-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Fitur Webinar */}
            <aside className="flex-1 grid grid-cols-1 gap-3 md:gap-4">
              {FEATURES.map((feature, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  viewport={{ once: true, margin: "50px" }}
                  className="p-3 md:p-4 bg-red-50/30 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-white rounded-md border border-red-100" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </aside>
          </div>

          {/* Target Audience */}
          <section className="mt-10 md:mt-12">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6 md:mb-8">Untuk Siapa?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {TARGET_AUDIENCE.map((item, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="p-4 md:p-5 bg-gray-50 rounded-xl text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-full flex items-center justify-center">
                      <UsersIcon className="w-4 h-4 md:w-5 md:h-5 text-red-600" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default About;