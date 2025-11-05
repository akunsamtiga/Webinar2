'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const Message = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-xs"
        >
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 sm:p-4 rounded-lg shadow-lg relative">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 pr-6">
                <p className="text-sm font-medium">
                  Ini adalah <span className="font-bold">Versi 1.0</span> dari halaman ini
                </p>
                <p className="text-xs mt-1">
                  Jika terdapat bug silahkan hubungi <span className='font-bold'>Developer</span>.
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-700 transition-colors"
                aria-label="Close message"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
            
            {/* Progress bar for auto-hide */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 10, ease: 'linear' }}
              className="h-1 bg-yellow-300 rounded-full mt-3"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;