'use client';
import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Early Bird",
      price: "Gratis",
      duration: "",
      features: [
        "Akses live webinar",
        "Materi presentasi (PDF)",
        "Sertifikat elektronik",
        "Q&A terbatas"
      ],
      cta: "Daftar Sekarang",
      popular: false
    },
    {
      name: "Premium",
      price: "Rp 299rb",
      duration: "per peserta",
      features: [
        "Semua benefit Early Bird",
        "Rekaman sesi (1 tahun akses)",
        "Slide deck + template eksklusif",
        "Prioritas Q&A",
        "Bonus: Cheat Sheet AI Tools"
      ],
      cta: "Pilih Paket Ini",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "tim 5+ orang",
      features: [
        "Semua benefit Premium",
        "Sesi konsultasi privat 30 menit",
        "Laporan analisis kebutuhan AI",
        "Diskon grup 20%",
        "Dedicated account manager"
      ],
      cta: "Hubungi Kami",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-bold">Investasi</span> Pengetahuan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative border rounded-lg overflow-hidden ${
                plan.popular 
                  ? 'border-red-300 shadow-sm' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-0 bg-red-600 text-white text-xs font-medium px-3 py-1 transform translate-x-2 -translate-y-2 rounded-l-xl">
                  <div className="flex items-center">
                    <StarIcon className="w-3 h-3 mr-1" />
                    POPULER
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${
                plan.popular 
                  ? 'bg-red-50 border-b border-red-100' 
                  : 'bg-gray-50 border-b border-gray-100'
              }`}>
                <h3 className={`text-lg font-medium ${
                  plan.popular ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="mt-2">
                  <span className={`text-2xl font-bold ${
                    plan.popular ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className={`text-sm ml-1 ${
                      plan.popular ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      / {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className={`w-4 h-4 mt-0.5 mr-2 flex-shrink-0 ${
                        plan.popular ? 'text-red-500' : 'text-gray-400'
                      }`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className={`w-full py-2.5 rounded-md text-sm font-medium ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300'
                } transition-colors`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-red-50 rounded-lg text-center max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="p-2 bg-white rounded-full border border-red-100">
              <CheckCircleIcon className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Garansi 100% Puas</h4>
              <p className="text-gray-600 text-sm mt-1">
                Jika tidak sesuai ekspektasi, kami kembalikan uang Anda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;