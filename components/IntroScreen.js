import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lines = ['نيكسا ليس مجرد عميل… بل هو المستقبل.', 'مصنوع بأيادٍ طلاب عرب.'];

export default function IntroScreen({ onStart }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="particles">
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            className="particle"
            key={i}
            style={{
              left: `${(i * 97) % 100}%`,
              animationDuration: `${9 + (i % 7)}s`,
              animationDelay: `${(i % 12) * 0.4}s`
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="glass gradient-border w-full max-w-3xl rounded-[28px] px-8 py-12 text-center shadow-glow"
      >
        <div className="space-y-4 arabic text-2xl leading-relaxed md:text-4xl">
          {lines.map((line, idx) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 1.1, duration: 0.8 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            className="arabic mt-10 rounded-2xl bg-gradient-to-r from-nexaBlue to-nexaPurple px-8 py-4 text-xl font-semibold shadow-glow"
          >
            🚀 ابدأ الآن
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
