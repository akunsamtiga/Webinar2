'use client';
import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';

// Lazy load ikon yang tidak kritis
const ArrowRightIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ArrowRightIcon), { 
  ssr: false,
  loading: () => <span className="w-4 h-4 ml-2"></span>
});
const CheckCircleIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.CheckCircleIcon));
const CreditCardIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.CreditCardIcon));

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulasi network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-3">
            <span className="text-red-600 font-bold">Daftar</span> Sekarang
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Isi formulir berikut untuk mengamankan tempat Anda di webinar eksklusif ini.
          </p>
        </div>

        {/* Form and Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Registration Form */}
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: "tween", ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 rounded-xl p-6">
                {isSuccess ? (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                    role="alert"
                    aria-live="polite"
                  >
                    <CheckCircleIcon className="w-12 h-12 text-red-500 mx-auto mb-4" aria-hidden="true" />
                    <h2 className="text-xl font-medium text-gray-900 mb-2">Pendaftaran Berhasil!</h2>
                    <p className="text-gray-600 mb-6">
                      Kami telah mengirimkan email konfirmasi ke alamat Anda.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-red-600 hover:text-red-800 font-medium text-sm"
                      aria-label="Kirim pendaftaran baru"
                    >
                      Kirim pendaftaran baru
                    </button>
                  </m.div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register('name', { required: 'Nama lengkap wajib diisi' })}
                          className={`w-full px-3 py-2.5 rounded-md border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                          placeholder="Masukkan nama lengkap"
                          aria-required="true"
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600" role="alert">{errors.name.message}</p>}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Email wajib diisi',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email tidak valid'
                            }
                          })}
                          className={`w-full px-3 py-2.5 rounded-md border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                          placeholder="email@contoh.com"
                          aria-required="true"
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600" role="alert">{errors.email.message}</p>}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Nomor WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone', { 
                            required: 'Nomor WhatsApp wajib diisi',
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Hanya angka yang diperbolehkan'
                            },
                            minLength: {
                              value: 10,
                              message: 'Nomor terlalu pendek'
                            }
                          })}
                          className={`w-full px-3 py-2.5 rounded-md border ${errors.phone ? 'border-red-300' : 'border-gray-300'} focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                          placeholder="81234567890"
                          aria-required="true"
                          aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-600" role="alert">{errors.phone.message}</p>}
                      </div>

                      {/* Company Field */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Perusahaan/Institusi
                        </label>
                        <input
                          id="company"
                          type="text"
                          {...register('company')}
                          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500"
                          placeholder="Nama perusahaan (opsional)"
                        />
                      </div>

                      {/* Plan Selection */}
                      <div>
                        <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                          Pilih Paket <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="plan"
                          {...register('plan', { required: 'Pilih paket pendaftaran' })}
                          className={`w-full px-3 py-2.5 rounded-md border ${errors.plan ? 'border-red-300' : 'border-gray-300'} focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                          aria-required="true"
                          aria-invalid={errors.plan ? "true" : "false"}
                        >
                          <option value="">-- Pilih Paket --</option>
                          <option value="free">Early Bird (Gratis)</option>
                          <option value="premium">Premium (Rp 299.000)</option>
                          <option value="enterprise">Enterprise (Custom)</option>
                        </select>
                        {errors.plan && <p className="mt-1 text-xs text-red-600" role="alert">{errors.plan.message}</p>}
                      </div>

                      {/* Questions Field */}
                      <div>
                        <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-1">
                          Pertanyaan/Kebutuhan Khusus
                        </label>
                        <textarea
                          id="questions"
                          rows={3}
                          {...register('questions')}
                          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500"
                          placeholder="Tulis pertanyaan atau kebutuhan khusus Anda..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center px-6 py-3 rounded-md bg-red-700 text-white font-medium hover:bg-red-700 transition-colors ${isSubmitting ? 'opacity-80' : ''}`}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></span>
                            Memproses...
                          </>
                        ) : (
                          <>
                            Daftar Sekarang
                            <ArrowRightIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy Policy */}
                    <p className="mt-4 text-xs text-gray-500 text-center">
                      Dengan mendaftar, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.
                    </p>
                  </>
                )}
              </form>
            </m.div>

            {/* Registration Info */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: "tween", ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-medium text-gray-900 mb-6">Informasi Pendaftaran</h2>

                <div className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Yang Anda dapatkan:</h3>
                    <ul className="space-y-2">
                      {[
                        "Akses ke webinar live",
                        "Materi presentasi (PDF)",
                        "Sertifikat partisipasi",
                        "Rekaman webinar (premium)",
                        "Bonus template eksklusif"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Payment Methods */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-2">
                      <CreditCardIcon className="w-5 h-5 text-red-500 mr-2" aria-hidden="true" />
                      <h3 className="font-medium text-gray-800">Metode Pembayaran:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Bank Transfer', 'Credit Card', 'OVO', 'DANA', 'Gopay'].map((method, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full text-xs">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200" role="region" aria-label="Testimonial">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-medium">
                          AS
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-gray-700 italic mb-1">
                          "Webinar ini sangat informatif! Saya langsung bisa aplikasikan ilmunya."
                        </blockquote>
                        <p className="text-gray-800 font-medium text-sm">Andi Susanto</p>
                        <p className="text-gray-500 text-xs">CEO RetailKu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default Registration;