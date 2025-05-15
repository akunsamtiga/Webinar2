'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseIcon, ChartBarIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const TargetAudience = () => {
  const shouldReduceMotion = useReducedMotion();

  const audiences = [
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Profesional Bisnis",
      description: "CEO, Manajer, dan pengambil keputusan yang ingin memanfaatkan AI untuk efisiensi operasional",
      roles: ["CEO/CTO", "Product Manager", "Business Analyst"]
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Tim Teknologi",
      description: "Developer dan IT specialist yang ingin mengintegrasikan AI ke dalam sistem perusahaan",
      roles: ["Software Engineer", "Data Scientist", "IT Manager"]
    },
    {
      icon: <LightBulbIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Startup Founder",
      description: "Pendiri startup yang mencari competitive edge dengan teknologi terkini",
      roles: ["Founder", "Startup Team", "Digital Entrepreneur"]
    },
    {
      icon: <ChartBarIcon className="w-6 h-6 text-red-600" aria-hidden="true" />,
      title: "Digital Marketer",
      description: "Profesional marketing yang ingin memanfaatkan AI untuk kampanye lebih efektif",
      roles: ["Digital Marketer", "Content Creator", "Growth Hacker"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-gray-900 mb-3">
            Untuk <span className="text-red-600 font-bold">Siapa?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Webinar ini dirancang khusus untuk profesional yang ingin memanfaatkan AI dalam bisnis dan karir mereka.
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
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-200 transition-colors"
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
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Peran Terkait:</h4>
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

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Tidak yakin apakah webinar ini cocok untuk Anda?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
