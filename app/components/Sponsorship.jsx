'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sponsorship = () => {
  const partners = [
    {
      name: "Ikatan Akuntan Indonesia",
      logo: "/images/1.png",
      tier: "platinum",
      url: "https://www.iaiglobal.or.id/",
      description: "Organisasi Induk"
    },
    {
      name: "IAI Komisariat Malang",
      logo: "/images/2.png",
      tier: "gold",
      url: "#",
      description: "Komisariat Wilayah"
    },
    {
      name: "Universitas Brawijaya",
      logo: "/images/3.png",
      tier: "gold",
      url: "https://www.ub.ac.id/",
      description: "Academic Partner"
    },
    {
      name: "BDO Indonesia",
      logo: "/images/4.png",
      tier: "silver",
      url: "https://www.bdo.co.id/",
      description: "Industry Partner"
    },
    {
      name: "Local Accounting Firms",
      logo: "/images/5.png",
      tier: "silver",
      url: "#",
      description: "Supporting Partner"
    }
  ];

  // Group partners by tier
  const platinumPartners = partners.filter(partner => partner.tier === "platinum");
  const goldPartners = partners.filter(partner => partner.tier === "gold");
  const silverPartners = partners.filter(partner => partner.tier === "silver");

  return (
    <section className="pt-16 pb-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-medium">Partner</span> & Pendukung
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Terima kasih kepada partner dan pendukung yang berkontribusi dalam kesuksesan training ini.
          </p>
        </div>

        {/* Platinum Partners */}
        {platinumPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Organisasi Induk</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {platinumPartners.map((partner, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-56 h-16 mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">{partner.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Gold Partners */}
        {goldPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Partner Utama</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {goldPartners.map((partner, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-md border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-40 h-12 mb-2">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-xs text-gray-600 text-center">{partner.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Silver Partners */}
        {silverPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Partner Pendukung</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {silverPartners.map((partner, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-32 h-10 mb-2">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-xs text-gray-600 text-center">{partner.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Appreciation Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-red-50 rounded-lg border border-red-100 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-3">🙏 Terima Kasih</h3>
          <p className="text-gray-600 mb-4">
            Training ini terlaksana berkat dukungan dan kolaborasi dari berbagai pihak. 
            Mari terus bersinergi untuk kemajuan profesi akuntansi di Indonesia.
          </p>
          <div className="pt-4 border-t border-red-200">
            <p className="text-sm text-gray-600 italic">
              "Bersama Membangun Profesionalisme Akuntan Muda Indonesia"
            </p>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-3">Tertarik Menjadi Partner?</h3>
          <p className="text-gray-600 mb-6">
            Bergabunglah dengan kami dalam mengembangkan ekosistem profesional akuntansi yang lebih baik.
          </p>
          <button className="inline-flex items-center px-5 py-2.5 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors text-sm font-medium">
            Hubungi Kami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;