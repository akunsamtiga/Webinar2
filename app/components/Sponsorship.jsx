'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sponsorship = () => {
  const sponsors = [
    {
      name: "Nodeflux",
      logo: "/images/1.png",
      tier: "platinum",
      url: "https://www.nodeflux.io/"
    },
    {
      name: "Bukalapak",
      logo: "/images/2.png",
      tier: "gold",
      url: "https://www.bukalapak.com/"
    },
    {
      name: "Telkom Indonesia",
      logo: "/images/3.png",
      tier: "gold",
      url: "https://www.telkom.co.id/"
    },
    {
      name: "XL Axiata",
      logo: "/images/4.png",
      tier: "silver",
      url: "https://www.xl.co.id/"
    },
    {
      name: "Elang Mahkota Teknologi",
      logo: "/images/5.png",
      tier: "silver",
      url: "https://emtek.co.id/"
    },
    {
      name: "Multipolar Technology",
      logo: "/images/6.webp",
      tier: "silver",
      url: "https://www.multipolar.com/"
    }
  ];

  // Group sponsors by tier
  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === "platinum");
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === "gold");
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === "silver");

  return (
    <section className="pt-16 pb-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-medium">Sponsor</span> & Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Terima kasih kepada sponsor dan partner yang mendukung acara ini.
          </p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Platinum Sponsor</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {platinumSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-56 h-16">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Gold Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {goldSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-50 rounded-md border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-40 h-12">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">Silver Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {silverSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 bg-gray-50 rounded border border-gray-200 hover:border-red-200 transition-colors"
                >
                  <div className="relative w-32 h-10">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Sponsor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-red-50 rounded-lg border border-red-100 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-3">Jadi Sponsor?</h3>
          <p className="text-gray-600 mb-6">Dapatkan eksposur brand Anda di depan audiens profesional.</p>
          <button className="inline-flex items-center px-5 py-2.5 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors text-sm font-medium">
            Hubungi Tim Sponsorship
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;